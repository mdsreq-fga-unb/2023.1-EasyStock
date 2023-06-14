import { createContext, useEffect, useState } from "react"; 
import { login, getUsernameFromToken } from "../services/authServices";
import Cookies from 'js-cookie';
import { api } from "../services/postsServices";

export const sessionStatus = async (navigate) => {
    const { token } = Cookies.get();

    if (!token) {
        navigate("/");
    }
}

export const isAuthenticated = async (navigate) => {
    const authToken = Cookies.get('token');

    if (authToken) {
        navigate("/inicio");
    }
}

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [username, setUsername] = useState();

    useEffect(() => {
        const { token } = Cookies.get();

        const objToken = {
            token
        }

        async function getUsername() {
            if (token) {
                const res = await getUsernameFromToken(objToken);
    
                if (res.status === 200) {
                    setUsername(res.data);
                }  
            }
        }

        getUsername();
        
    }, []);
    
    async function signIn(data) {
        const res = await login(data);

        if (res.status === 200) {
            const { token, username } = res.data;

            Cookies.set('token', token, { expires: 1 }); // Expira em 1 dia
        
            setUsername(username);

            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            
            return true;
        }

        return false;
    }

    async function signOut() {
        Cookies.remove('token');

        setUsername(null);
    }

    return (
        <AuthContext.Provider value={{ username, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}