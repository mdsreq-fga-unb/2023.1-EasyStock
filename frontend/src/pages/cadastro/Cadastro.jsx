import React from "react";
import "./CadastroStyled.css";

export default function Cadastro() {
    return (
        <section>
            <form>
                <div class="container">
                    <div class="card">
                        <h1> Login </h1>

                        <div class="label-float">
                            <input
                                type="text"
                                id="usuario"
                                paceholder=""
                                required
                            />
                            <label for="usuario"> Usuário</label>
                        </div>

                        <div class="label-float">
                            <input
                                type="password"
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
