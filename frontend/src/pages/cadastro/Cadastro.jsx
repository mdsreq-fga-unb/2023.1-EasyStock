import React from "react";
import "./CadastroStyled.css";

export default function Cadastro() {
    return (
        <section>
            <form>
                <div class="principal">
                    <div class="divLogin">
                        <h1 className="hLogin"> Login </h1>

                        <div class="inputs">
                            <input
                                type="text"
                                id="usuario"
                                paceholder=""
                                required
                            />
                            <label for="usuario"> Usuário</label>
                        </div>

                        <div class="inputs">
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
