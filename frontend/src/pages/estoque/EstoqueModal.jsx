import React, { useState } from "react";
import { TodoModal } from "./EstoqueModalStyled";
import { postProduto } from "../../services/postsServices";

export default function EstoqueModal({ isOpen, onClose }) {
    const [nome, setNome] = useState();
    const [precoCusto, setPrecoCusto] = useState();
    const [precoVenda, setPrecoVenda] = useState();
    const [qtdEstoque, setQtdEstoque] = useState();
    const [qtdEstoqueMin, setQtdEstoqueMin] = useState();
    const [medida, setMedida] = useState();
    const [statusVenda, setStatusVenda] = useState();

    const [showConfirmation, setShowConfirmation] = useState(false); // Estado para controlar a exibição da caixa de diálogo de confirmação
    const [data, setData] = useState(null); // Variável para armazenar os dados do formulário

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let statusVenda = false;
        if (parseInt(qtdEstoque) >= parseInt(qtdEstoqueMin)) {
            statusVenda = true;
        }
        console.log(statusVenda);
        const formData = {
            nome,
            precoCusto,
            precoVenda,
            qtdEstoque,
            qtdEstoqueMin,
            medida,
            statusVenda,
        };

        // Armazenar os dados do formulário na variável "data"
        setData(formData);

        // Mostrar a caixa de diálogo de confirmação
        setShowConfirmation(true);
    };

    const handleConfirmation = async (confirmed) => {
        if (confirmed) {
            if (data) {
                // Se o usuário confirmou e os dados do formulário existem
                await postProduto(data);
            }
        }

        // Fechar a caixa de diálogo de confirmação
        setShowConfirmation(false);
    };

    if (isOpen) {
        return (
            <TodoModal>
                <div className="container">
                    <div className="card">
                        <h1>Adicionar Produtos</h1>
                        <form onSubmit={handleFormSubmit}>
                            <div className="label-float">
                                <input
                                    type="text"
                                    id="nome"
                                    placeholder="Nome *"
                                    required
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="number"
                                    step="any"
                                    id="precoCusto"
                                    placeholder="Preço custo *"
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
                                    placeholder="Preço venda *"
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
                                    placeholder="Quantidade *"
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
                                    placeholder="Quantidade mínima *"
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
                                    <option value="G">G</option>
                                    <option value="L">L</option>
                                    <option value="mL">mL</option>
                                </select>
                            </div>
                            <div className="alinhar">
                                <input
                                    type="submit"
                                    name="Adicionar Produto"
                                    id="enviar"
                                    className="buttons"
                                />

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

                {/* Caixa de diálogo de confirmação */}
                {showConfirmation && (
                    <section className="container">
                        <div className="card">
                            <p>Deseja adicionar o produto?</p>
                            <div className="separar-botoes">
                                <button
                                    onClick={() => handleConfirmation(true)}
                                >
                                    SIM
                                </button>
                                <button
                                    onClick={() => handleConfirmation(false)}
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
