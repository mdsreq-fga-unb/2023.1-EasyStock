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
                                <label htmlFor="pagamento">
                                    Tipo de pagamento:
                                </label>
                                <select
                                    id="pagamento"
                                    onChange={(e) => setMedida(e.target.value)}
                                >
                                    <option value="CR">Crédito</option>
                                    <option value="DB">Débito</option>
                                    <option value="PX">PIX</option>
                                    <option value="DN">Dinheiro</option>
                                    <option value="FD">Fiado</option>
                                </select>
                            </div>
                             {/* <div className="label-float">
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
                            </div> */}
                            <div className="label-float">
                                <label htmlFor="entrega">Tipo de entrega:</label>
                                <select
                                    id="entrega"
                                    onChange={(e) => setMedida(e.target.value)}
                                >
                                    <option value="SE">Sem Entrega</option>
                                    <option value="LJ">Loja</option>
                                    <option value="AP">Aplicativo</option>

                                </select>
                            </div>
                            <div className="display-botoes">
                                <input
                                    type="submit"
                                    name="Adicionar Produto"
                                    id="enviar"
                                    className="buttons"
                                    value="Finalizar pedido"
                                />
                            </div>
                            <div className="display-botoes">
                                {/* <button className="button-modal">Adicionar</button> */}
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
