import React from "react";
import "./CadastroStyled.css";

export default function Cadastro() {
    return (
        <section>
            <form>
                <div class="container">
                    <div class="card">
                        <h1> Cadastrar </h1>

                        <div class="label-float">
                            <input
                                type="text"
                                id="nome"
                                paceholder=""
                                required
                            />
                            <label for="nome"> Nome</label>
                        </div>

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
                            <label for="senha"> Confirmar senha</label>
                            <i
                                id="verSenha"
                                class="fa fa-eye"
                                aria-hidden="true"
                            ></i>
                        </div>

                        <div class="label-float">
                            <input
                                type="password"
                                id="confirmSenha"
                                paceholder=""
                                required
                            />
                            <label for="confirmSenha"> Confirmar Senha</label>
                            <i
                                id="verConfirmSenha"
                                class="fa fa-eye"
                                aria-hidden="true"
                            ></i>
                        </div>

                        <div class="justify-center">
                            <input
                                type="submit"
                                name="Adicionar Produto"
                                id="enviar"
                                className="buttons"
                                value="Cadastrar"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
