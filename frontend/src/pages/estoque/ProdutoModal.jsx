import React, { useState } from "react";
import { TodoModal } from "./EstoqueModalStyled";
import { deleteProduto, updateProduto } from "../../services/postsServices";

export default function ProdutoModal({ isOpen, onClose, selectedProduct }) {
    const [nome, setNome] = useState();
    const [precoCusto, setPrecoCusto] = useState();
    const [precoVenda, setPrecoVenda] = useState();
    const [qtdEstoque, setQtdEstoque] = useState();
    const [qtdEstoqueMin, setQtdEstoqueMin] = useState();
    const [medida, setMedida] = useState();
    const [codigoPDV, setCodigoPDV] = useState();

    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showUpdateConfirmation, setShowUpdateConfirmation] = useState(false);

    if (!isOpen) {
        return null;
    }

    if (!selectedProduct) {
        return null;
    }

    const pdv = selectedProduct.codigoPDV;

    const deleteProduct = async (pdv) => {
        await deleteProduto(pdv);
        window.location.reload();
    };

    const updateProduct = async (pdv, data) => {
        await updateProduto(pdv, data);
        window.location.reload();
    };

    const handleFormSubmit = async (e, pdv) => {
        e.preventDefault();
        const data = {
            nome,
            precoCusto,
            precoVenda,
            qtdEstoque,
            qtdEstoqueMin,
            medida,
            statusVenda: true,
        };

        await updateProduct(pdv, data);
        onClose();
    };

    const handleDeleteConfirmation = async (confirmed) => {
        if (confirmed) {
            await deleteProduct(pdv);
            onClose();
        }
        setShowDeleteConfirmation(false);
    };

    const handleUpdateConfirmation = async (confirmed) => {
        if (confirmed) {
            const data = {
                nome,
                precoCusto,
                precoVenda,
                qtdEstoque,
                qtdEstoqueMin,
                medida,
                statusVenda: true,
            };
            await updateProduct(pdv, data);
            onClose();
        }
        setShowUpdateConfirmation(false);
    };

    return (
        <TodoModal>
            <div className="container">
                <div className="card">
                    <h1>{selectedProduct.nome}</h1>
                    <form
                        onSubmit={async (e) =>
                            await handleFormSubmit(e, pdv).then(onClose)
                        }
                    >
                        <div className="label-float">
                            <input
                                type="text"
                                name="nome"
                                id="nome"
                                placeholder={`Nome: ${selectedProduct.nome}`}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="label-float">
                            <input
                                type="number"
                                step="any"
                                name="custo"
                                id="custo"
                                placeholder={`Preço Custo: ${selectedProduct.precoCusto}`}
                                onChange={(e) => setPrecoCusto(e.target.value)}
                            />
                        </div>
                        <div className="label-float">
                            <input
                                type="number"
                                step="any"
                                name="custo"
                                id="custo"
                                placeholder={`Preço Venda: ${selectedProduct.precoVenda}`}
                                onChange={(e) => setPrecoVenda(e.target.value)}
                            />
                        </div>
                        <div className="label-float">
                            <input
                                type="number"
                                name="qtd"
                                id="qtd"
                                placeholder={`Quantidade: ${selectedProduct.qtdEstoque}`}
                                onChange={(e) => setQtdEstoque(e.target.value)}
                            />
                        </div>
                        <div className="label-float">
                            <input
                                type="qtdMin"
                                name="min"
                                id="min"
                                placeholder={`Quantidade mínima: ${selectedProduct.qtdEstoqueMin}`}
                                onChange={(e) =>
                                    setQtdEstoqueMin(e.target.value)
                                }
                            />
                        </div>
                        <div className="label-float">
                            <select
                                name="medida"
                                id="medida"
                                defaultValue=""
                                onChange={(e) => setMedida(e.target.value)}
                            >
                                <option value="" disabled hidden>
                                    {selectedProduct.medida}
                                </option>
                                <option value="UN">UN</option>
                                <option value="UN">KG</option>
                            </select>
                        </div>
                        <div className="display-botoes">
                            <button
                                type="button"
                                name="atualizar"
                                id="atualizar"
                                className="buttons"
                                value="Atualizar"
                                onClick={() => setShowUpdateConfirmation(true)} // Mostrar a caixa de diálogo de confirmação
                            >
                                Atualizar
                            </button>
                        </div>
                        <div className="display-botoes">
                            <input
                                type="button"
                                name="deletar"
                                id="deletar"
                                className="buttons"
                                value="Deletar"
                                onClick={() => setShowDeleteConfirmation(true)} // Mostrar a caixa de diálogo de confirmação
                            />
                        </div>
                        <div className="display-botoes">
                            <button className="button-modalc" onClick={onClose}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {showDeleteConfirmation && (
                <section className="container">
                    <div className="card">
                        <p>Deseja deletar o produto?</p>
                        <div className="separar-botoes">
                            <button
                                onClick={() => handleDeleteConfirmation(true)}
                            >
                                SIM
                            </button>
                            <button
                                onClick={() => handleDeleteConfirmation(false)}
                            >
                                NÃO
                            </button>
                        </div>
                    </div>
                </section>
            )}
            {showUpdateConfirmation && (
                <section className="container">
                    <div className="card">
                        <p>Deseja Atualizar o produto?</p>
                        <div className="separar-botoes">
                            <button
                                onClick={() => handleUpdateConfirmation(true)}
                            >
                                SIM
                            </button>
                            <button
                                onClick={() => handleUpdateConfirmation(false)}
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
