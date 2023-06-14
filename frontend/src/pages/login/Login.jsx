import React, { useState, useEffect } from "react";
import "./LoginStyled.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { isAuthenticated } from "../../contexts/AuthContext";


export default function Login() {
    const { register, handleSubmit } = useForm();
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    useEffect(() => {
        isAuthenticated(navigate);
    }, []);    

    async function handleSignIn(data) {
        const res = await signIn(data);
        if (res) {
            navigate("/inicio");
        }
    }

    return (
        <section>
            <form className="principal" onSubmit={handleSubmit(handleSignIn)}>
                <div className="divLogin">
                    <div className="hLogin">
                        <h1> Login </h1>

                        <div className="inputs">
                            <input
                                {...register('username')}
                                type="text"
                                name="username"
                                id="username"
                                paceholder=""
                                required
                            />
                            <label htmlFor="username"> Usuário</label>
                        </div>

                        <div className="inputs">
                            <input
                                {...register('password')}
                                type="password"
                                name="password"
                                id="senha"
                                paceholder=""
                                required
                            />
                            <label htmlFor="senha"> Senha</label>                       
                        </div>


                        <div className="justify-center">
                            <input
                                type="submit"
                                name="Entrar"
                                id="Entrar"
                                className="login"
                                value="Entrar"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
