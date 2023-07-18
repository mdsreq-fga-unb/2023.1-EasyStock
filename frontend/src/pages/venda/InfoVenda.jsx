import React, { useEffect, useState } from "react";
import { TodoModal } from "../estoque/EstoqueModalStyled";
import { deleteVenda, getVendaById } from "../../services/postsServices";

export default function InfoVenda({ isOpen, onClose, selectedVenda }) {
    const [venda, setVenda] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    if (isOpen) {
        let nomeCliente;

        if (selectedVenda.cliente) {
            nomeCliente = selectedVenda.cliente.nome;
        } else {
            nomeCliente = "-";
        }

        function printaProdutos() {
            let string = "";
            for (let i = 0; i < selectedVenda.produtos.length; i++) {
                string =
                    string +
                    `Produto ${i + 1}: 
                ${selectedVenda.produtos[i].produto.nome}, 
                Preço Unitário: ${selectedVenda.produtos[
                    i
                ].produto.precoVenda.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                })}, 
                Quantidade: ${selectedVenda.produtos[i].quantidade}\n`;
            }
            return string;
        }

        const qtd = printaProdutos();

        const id = selectedVenda._id;
        const handleDeleteConfirmation = async (confirmed) => {
            if (confirmed) {
                await deleteVenda(id);
                onClose();
            }
            setShowDeleteConfirmation(false);
        };

        return (
            <TodoModal>
                <div className="container">
                    <div className="card">
                        <h1>Venda: {selectedVenda._id}</h1>
                        <div className="infoVenda">
                            <h3
                                id="produtos-container"
                                className="produtos-container"
                            >
                                {qtd}
                            </h3>

                            <h3>
                                Preço Total:{" "}
                                {selectedVenda.precoTotal.toLocaleString(
                                    "pt-BR",
                                    { style: "currency", currency: "BRL" }
                                )}
                            </h3>

                            <h3>
                                Tipo do Pagamento: {selectedVenda.tipoPagamento}
                            </h3>

                            <h3>
                                Tipo de Entrega: {selectedVenda.tipoEntrega}
                            </h3>

                            <h3>Data da venda: {selectedVenda.dataPedido}</h3>

                            <h3>Cliente: {nomeCliente}</h3>
                        </div>
                        <div className="alinhar">
                            <button
                                type="button"
                                name="deletar"
                                id="deletar"
                                className="buttons"
                                value="Deletar"
                                onClick={() => setShowDeleteConfirmation(true)} // Mostrar a caixa de diálogo de confirmação
                            >
                                Deletar
                            </button>
                            <button className="button-modalc" onClick={onClose}>
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
                {showDeleteConfirmation && (
                    <section className="container">
                        <div className="card">
                            <p>Deseja deletar a venda?</p>
                            <div className="separar-botoes">
                                <button
                                    onClick={() =>
                                        handleDeleteConfirmation(true)
                                    }
                                >
                                    SIM
                                </button>
                                <button
                                    onClick={() =>
                                        handleDeleteConfirmation(false)
                                    }
                                >
                                    NÃO
                                </button>
                            </div>
                        </div>
                    </section>
                )}
            </TodoModal>
        );
    }
    return null;
}
