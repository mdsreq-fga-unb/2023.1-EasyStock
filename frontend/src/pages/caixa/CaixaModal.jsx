import React from "react";
import { TodoModal } from "../estoque/EstoqueModalStyled";
import { useState } from "react";

export default function ModalCliente({ isOpen, onClose }) {
    if (isOpen) {
        return (
            <TodoModal>
                <div className="container">
                    <div className="card">
                        <h1>Pagamentos</h1>
                        <form onSubmit={(e) => createForm(e)}>
                            <div className="label-float">
                                <label htmlFor="medida">Tipo de pagamento:</label>
                                <select
                                    id="medida"
                                    onChange={(e) => setMedida(e.target.value)}
                                >
                                    <option value="C">Cartão</option>
                                    <option value="PD">pix/dinheiro</option>
                                    <option value="F">Fiado</option>
                                </select>
                            </div>
                            <div className="label-float">
                                <input
                                    type="number"
                                    step="any"
                                    id="Qtd"
                                    placeholder="Valor recebido"
                                    required
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="number"
                                    step="any"
                                    id="preco"
                                    placeholder="Troco"
                                    required
                                />
                            </div>
                            <div className="label-float">
                            <label htmlFor="medida">Tipo de entrega:</label>
                                <select
                                    id="medida"
                                    onChange={(e) => setMedida(e.target.value)}
                                >
                                    <option value="UN">presencial</option>
                                    <option value="KG">ifood</option>
                                    <option value="KG">mototaxi</option>
                                </select>
                            </div>
                            <input
                                type="submit"
                                name="Adicionar Produto"
                                id="enviar"
                                className="buttons"
                                value="Finalizar pedido"
                            />
                        </form>
                        <div className="button-container">
                            {/* <button className="button-modal">Adicionar</button> */}
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
