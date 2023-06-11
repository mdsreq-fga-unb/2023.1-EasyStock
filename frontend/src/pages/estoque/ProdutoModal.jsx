import React from "react";
import { TodoModal } from "./EstoqueModalStyled";

export default function ProdutoModal({ isOpen, onClose, selectedProduct }) {
    if (!isOpen) {
        return null;
    }

    if (!selectedProduct) {
        return null;
    }

    return (
        <TodoModal>
            <div className="container">
                <div className="card">
                    <h3>{selectedProduct.nome}</h3>

                    <p>Preço Custo: {selectedProduct.precoCusto}</p>
                    <p>Preço Venda: {selectedProduct.precoVenda}</p>

                    <button onClick={onClose}>Fechar</button>
                </div>
            </div>
        </TodoModal>
    );
}

