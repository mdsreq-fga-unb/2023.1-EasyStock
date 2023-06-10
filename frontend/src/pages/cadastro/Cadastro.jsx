import React from "react";
import "./CadastroStyled.css";
import { useForm } from "react-hook-form";
import { login } from "../../services/authServices";


export default function Cadastro() {
    const { register, handleSubmit } = useForm();

    async function handleSignIn(data) {
        const res = await login(data);

        console.log(res.data);
        const token = res.data;
        return token;
    }

    return (
        <section>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <div class="container">
                    <div class="card">
                        <h1> Login </h1>

                        <div class="label-float">
                            <input
                                {...register('username')}
                                type="text"
                                name="username"
                                id="username"
                                paceholder=""
                                required
                            />
                            <label for="username"> Usuário</label>
                        </div>

                        <div class="label-float">
                            <input
                                {...register('password')}
                                type="password"
                                name="password"
                                id="senha"
                                paceholder=""
                                required
                            />
                            <label for="senha"> Senha</label>                       
                        </div>


                        <div class="justify-center">
                            <input
                                type="submit"
                                name="Entrar"
                                id="Entrar"
                                className="buttonz"
                                value="Entrar"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
