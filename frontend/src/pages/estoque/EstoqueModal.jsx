import React from "react";
import { TodoModal } from "./EstoqueModalStyled";

export default function EstoqueModal({ isOpen, onClose }) {
    if (isOpen) {
        return (
            <TodoModal>
                <div className="container">
                    <div className="card">
                        <h1>Adicionar Produtos</h1>
                        <div className="label-float">
                            <input
                                type="text"
                                id="nome"
                                placeholder="Nome"
                                required
                            />
                            <input
                                type="text"
                                id="precoCusto"
                                placeholder="Preço custo"
                                required
                            />
                            <input
                                type="text"
                                id="precoVenda"
                                placeholder="Preço venda"
                                required
                            />
                            <input
                                type="text"
                                id="qtdEstoque"
                                placeholder="Quantidade"
                                required
                            />
                            <input
                                type="text"
                                id="codigoPDV"
                                placeholder="Código PDV"
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
