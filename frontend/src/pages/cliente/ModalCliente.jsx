import React from "react";
import { TodoModal } from "../estoque/EstoqueModalStyled";

export default function ModalCliente({ isOpen, onClose }) {
    if (isOpen) {
        return (
            <TodoModal>
                <div className="container">
                    <div className="card">
                        <h1>Adicionar Cliente</h1>
                        <form>
                            <div className="label-float">
                                <input
                                    type="text"
                                    id="nome"
                                    placeholder="Nome"
                                    required
                                />
                            </div>

                            <div className="label-float">
                                <input
                                    type="number"
                                    id="numeroTelefone"
                                    placeholder="Número *"
                                    required
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="email *"
                                    required
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="number"
                                    step="any"
                                    id="valorDivida "
                                    placeholder="Valor da Divida"
                                    required
                                />
                            </div>
                            <div className="display-botoes">
                                <input
                                    type="submit"
                                    name="Adicionar Produto"
                                    id="enviar"
                                    className="buttons"
                                />
                            </div>
                            <div className="display-botoes">
                                <button
                                    className="button-modalc"
                                    onClick={onClose}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </TodoModal>
        );
    }
    return null;
}
