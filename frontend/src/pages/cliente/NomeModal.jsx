import React, { useState } from "react";
import { TodoModal } from "../estoque/EstoqueModalStyled";
import { deleteCliente, updateCliente } from "../../services/postsServices";

export default function NomeModal({ isOpen, onClose, selectedClient }) {
    const [nome, setNome] = useState();
    const [telefone, setNumeroTelefone] = useState();
    const [email, setEmail] = useState();
    const [divida, setValorDivida] = useState();

    if (!isOpen) {
        return null;
    }

    if (!selectedClient) {
        return null;
    }

    const id = selectedClient._id;
    //console.log(id);

    const deleteClient = async (id) =>{
        await deleteCliente(id);

        window.location.reload();
    }
        
    const handleFormSubmit = async (e, id) => {
        e.preventDefault();

        const data = {
            nome,
            telefone,
            email,
            divida,
        };
        await updateCliente(id, data);

        window.location.reload();
    };


    return (
        <TodoModal>
            <div className="container">
                <div className="card">
                    <h1>{selectedClient.nome}</h1>
                    <form
                        onSubmit={async (e) =>
                            await handleFormSubmit(e, id).then(onClose)
                        }
                    >
                        <div className="label-float">
                            <input
                                type="text"
                                name="nome"
                                id="nome"
                                placeholder={`Nome: ${selectedClient.nome}`}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="label-float">
                            <input
                                type="number"
                                step="any"
                                name="numero"
                                id="numero"
                                placeholder={`Número: ${selectedClient.telefone}`}
                                onChange={(e) => setNumeroTelefone(e.target.value)}
                            />
                        </div>
                        <div className="label-float">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder={`Email: ${selectedClient.email}`}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="label-float">
                            <input
                                type="number"
                                name="qtd"
                                id="qtd"
                                placeholder={`Quantidade: ${selectedClient.divida}`}
                                onChange={(e) => setValorDivida(e.target.value)}
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
                            <input
                                type="submit"
                                name="deletar"
                                id="deletar"
                                className="buttons"
                                value="Deletar"
                                onClick={async () =>
                                    await deleteClient(id).then(onClose)
                                }
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
        </TodoModal>
    );
}
