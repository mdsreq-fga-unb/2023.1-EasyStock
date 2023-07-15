import React from "react";
import { TodoModal } from "../estoque/EstoqueModalStyled";

export default function InfoVenda({ isOpen, onClose, selectedVenda }) {
    if (!isOpen) {
        return null;
    }
    if (!selectedVenda) {
        return null;
    }

    return (
        <TodoModal>
            <div className="container">
                <div className="card">
                    <h1>{selectedVenda.precoTotal}</h1>
                    <div className="label-float">
                        <h3>Informação 1</h3>
                    </div>
                    <div className="label-float">
                        <h3>Informação 2</h3>
                    </div>
                    <div className="label-float">
                        <h3>Informação 3</h3>
                    </div>
                    <div className="display-botoes">
                        <button className="button-modalc" onClick={onClose}>
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </TodoModal>
    );
}
