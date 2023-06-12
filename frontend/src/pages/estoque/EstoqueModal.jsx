import React from "react";
import { TodoModal } from "./EstoqueModalStyled";
import { useState } from "react";
import blogFetch from "../../services/postProduto";
import { postProduto } from "../../services/postsServices";

export default function EstoqueModal({ isOpen, onClose }) {
    const [nome, setNome] = useState();
    const [precoCusto, setPrecoCusto] = useState();
    const [precoVenda, setPrecoVenda] = useState();
    const [qtdEstoque, setQtdEstoque] = useState();
    const [qtdEstoqueMin, setQtdEstoqueMin] = useState();
    const [medida, setMedida] = useState();
    const [statusVenda, setStatusVenda] = useState();

    const createForm = async (e) => {
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
        //console.log(data);

        await postProduto(data);

        // Recarrega a página
        window.location.reload();
    };

    if (isOpen) {
        return (
            <TodoModal>
                <div className="container">
                    <div className="card">
                        <h1>Adicionar Produtos</h1>
                        <form
                            onSubmit={async (e) =>
                                await createForm(e).then(onClose)
                            }
                        >
                            <div className="label-float">
                                <input
                                    type="text"
                                    id="nome"
                                    placeholder="Nome"
                                    required
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="number"
                                    step="any"
                                    id="precoCusto"
                                    placeholder="Preço custo"
                                    required
                                    onChange={(e) =>
                                        setPrecoCusto(e.target.value)
                                    }
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="number"
                                    step="any"
                                    id="precoVenda"
                                    placeholder="Preço venda"
                                    required
                                    onChange={(e) =>
                                        setPrecoVenda(e.target.value)
                                    }
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="number"
                                    id="qtdEstoque"
                                    placeholder="Quantidade"
                                    required
                                    onChange={(e) =>
                                        setQtdEstoque(e.target.value)
                                    }
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="number"
                                    id="qtdEstoqueMin"
                                    placeholder="Quantidade mínima"
                                    required
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
                                    required
                                    onChange={(e) => setMedida(e.target.value)}
                                >
                                    <option value="" disabled hidden>
                                        Selecione uma medida:
                                    </option>
                                    <option value="UN">UN</option>
                                    <option value="KG">KG</option>
                                </select>
                            </div>
                            <div className="display-botoes">
                                <input
                                    type="submit"
                                    name="Adicionar Produto"
                                    id="enviar"
                                    className="buttons"
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
