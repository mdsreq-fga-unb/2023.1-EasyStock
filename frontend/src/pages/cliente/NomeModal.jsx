import React, { useState } from "react";
import { TodoModal } from "../estoque/EstoqueModalStyled";

export default function NomeModal({ isOpen, onClose, selectedClient }) {
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
            telefone,
            email,
            divida,           
        };
        await editClient(data);
    };

    if (!isOpen) {
        return null;
    }

    if (!selectedClient) {
        return null;
    }

    return (
        <TodoModal>
            <div className="container">
                <div className="card">
                    <h1>{selectedClient.nome}</h1>
                    <form onSubmit={async (e) => await handleFormSubmit(e).then(onClose)}>
                        <div className="label-float">
                            <input
                                type="text"
                                name="nome"
                                id="nome"
                                placeholder={`Nome: ${selectedClient.nome}`}
                                onChange={(e) => setPrecoCusto(e.target.value)}
                            />
                        </div>
                        <div className="label-float">
                            <input
                                type="number"
                                step="any"
                                name="numero"
                                id="numero"
                                placeholder={`Número: ${selectedClient.telefone}`}
                                onChange={(e) => setPrecoVenda(e.target.value)}
                            />
                        </div>
                        <div className="label-float">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder={`Email: ${selectedClient.email}`}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="label-float">
                            <input
                                type="number"
                                name="qtd"
                                id="qtd"
                                placeholder={`Quantidade: ${selectedClient.divida}`}
                                onChange={(e) => setQtdEstoque(e.target.value)}
                            />
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
