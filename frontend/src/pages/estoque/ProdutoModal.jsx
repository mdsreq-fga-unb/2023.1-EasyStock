import React, { useState } from "react";
import { TodoModal } from "./EstoqueModalStyled";

export default function ProdutoModal({ isOpen, onClose, selectedProduct }) {
    // const [nome, setNome] = useState();
    // const [precoCusto, setPrecoCusto] = useState();
    // const [precoVenda, setPrecoVenda] = useState();
    // const [qtdEstoque, setQtdEstoque] = useState();
    // const [qtdEstoqueMin, setQtdEstoqueMin] = useState();
    // const [medida, setMedida] = useState();

    const handleFormSubmit = async (e) => {
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
        await editProduto(data);
    };

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
                    <h1>{selectedProduct.nome}</h1>
                    <form onSubmit={async (e) => await handleFormSubmit(e).then(onClose)}>
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
                            <input
                                type="submit"
                                name="editar"
                                id="editar"
                                className="buttons"
                                value="Atualizar"
                            />
                        </div>
                        <div className="display-botoes">
                            <input type="submit" name="deletar" id="deletar" className="buttons" value="Deletar" />
                        </div>
                        <div className="display-botoes">
                            <button className="button-modalc" onClick={onClose}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </TodoModal>
    );
}
