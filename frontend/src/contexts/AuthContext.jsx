import { createContext, useEffect, useState } from "react"; 
import { login, getUsernameFromToken } from "../services/authServices";
import Cookies from 'js-cookie';
import { api } from "../services/postsServices";
import swal from 'sweetalert';

export const sessionStatus = async (navigate) => {
    const adminToken = Cookies.get('adminToken');
    const employeeToken = Cookies.get('employeeToken');

    if (!adminToken && !employeeToken) {
        await swal("Acesso Negado!", "Você não possui permissão para acessar esta página", "error");
        navigate("/");
    }
}

export const sessionStatusAdmin = async (navigate) => {
    const adminToken = Cookies.get('adminToken');

    if (!adminToken) {
        await swal("Acesso Negado!", "Você não possui permissão para acessar esta página", "error");
        navigate("/inicio");
    }
}

export const isAuthenticated = async (navigate) => {
    const adminToken = Cookies.get('adminToken');
    const employeeToken = Cookies.get('employeeToken');

    if (adminToken || employeeToken) {
        navigate("/inicio");
    }
}

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [username, setUsername] = useState();

    useEffect(() => {
        const adminToken = Cookies.get('adminToken');
        const employeeToken = Cookies.get('employeeToken');

        const objTokenAdmin = {
            adminToken
        }

        const objTokenEmployee = {
            employeeToken
        }

        async function getUsername() {
            if (adminToken) {
                const res = await getUsernameFromToken(objTokenAdmin);
    
                if (res.status === 200) {
                    setUsername(res.data);
                }  
            } else if (employeeToken) {
                const res = await getUsernameFromToken(objTokenEmployee);
    
                if (res.status === 200) {
                    setUsername(res.data);
                }
            }
        }

        getUsername();
        
    }, []);
    
    async function signIn(data) {
        const res = await login(data);

        if (res) {
            if (res.status == 200) {
                const { token, username } = res.data;

                const parts = username.split(":");

                if (!parts.length === 2)
                    return false;

                const [ user, role ] = parts;

                if (role == 'adm') {
                    Cookies.set('adminToken', token, { expires: 1 }); // Expira em 1 dia
                } else if (role == 'emp') {
                    Cookies.set('employeeToken', token, { expires: 1 }); // Expira em 1 dia
                }
            
                setUsername(username);

                api.defaults.headers['Authorization'] = `Bearer ${token}`;

                return true;
            }
        }

        return false;
    }

    async function signOut(navigate) {
        Cookies.remove('adminToken');
        Cookies.remove('employeeToken');

        setUsername(null);

        navigate("/");
    }

    return (
        <AuthContext.Provider value={{ username, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}