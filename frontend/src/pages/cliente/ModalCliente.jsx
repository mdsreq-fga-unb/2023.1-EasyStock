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
                        </form>

                        <div className="button-container">
                            <button className="button-modal">Adicionar</button>
                            <button className="button-modalc" onClick={onClose}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </TodoModal>
        );
    }
    return null;
}
