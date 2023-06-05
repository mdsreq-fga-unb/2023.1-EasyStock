import React from "react";
import { TodoModal } from "../estoque/EstoqueModalStyled";

export default function ModalCliente({ isOpen, onClose }) {
    if (isOpen) {
        return (
            <TodoModal>
                <div className="container">
                    <div className="card">
                        <h1>Adicionar Cliente</h1>
                        <div className="label-float">
                            <input
                                type="text"
                                id="nome"
                                placeholder="Nome"
                                required
                            />
                                <input
                                    type="number"
                                    id="numeroTelefone"
                                    placeholder="Número *"
                                    required
                                />
                            <input
                                type="email"
                                id="email"
                                placeholder="email *"
                                required
                            />
                            <input
                                type="number"
                                id="valorDivida "
                                placeholder="Valor da Divida"
                                required
                            />
                            
                        </div>
                        <div className="button-container">
                            <button className="button-modal">Adicionar</button>
                            <button className="button-modalc" onClick={onClose}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </TodoModal>
        );
    }
    return null;
}
