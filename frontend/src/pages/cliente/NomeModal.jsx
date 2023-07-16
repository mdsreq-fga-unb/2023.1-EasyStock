import React, { useState } from "react";
import { TodoModal } from "../estoque/EstoqueModalStyled";
import { deleteCliente, updateCliente } from "../../services/postsServices";

export default function NomeModal({ isOpen, onClose, selectedClient }) {
    const [nome, setNome] = useState();
    const [telefone, setNumeroTelefone] = useState();
    const [email, setEmail] = useState();
    const [divida, setValorDivida] = useState();
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showUpdateConfirmation, setShowUpdateConfirmation] = useState(false);

    if (!isOpen) {
        return null;
    }

    if (!selectedClient) {
        return null;
    }

    const id = selectedClient._id;

    const handleFormSubmit = async (e, id) => {
        e.preventDefault();

        const data = {
            nome,
            telefone,
            email,
            divida,
        };
        await updateCliente(id, data);
    };

    const handleDeleteConfirmation = async (confirmed) => {
        if (confirmed) {
            await deleteCliente(id);
        }
        setShowDeleteConfirmation(false);
    };

    const handleUpdateConfirmation = async (confirmed) => {
        if (confirmed) {
            const data = {
                nome,
                telefone,
                email,
                divida,
            };
            await updateCliente(id, data);
        }
        setShowUpdateConfirmation(false);
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
                                onChange={(e) =>
                                    setNumeroTelefone(e.target.value)
                                }
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
                                placeholder={`Divida: ${selectedClient.divida}`}
                                onChange={(e) => setValorDivida(e.target.value)}
                            />
                        </div>
                        <div className="alinhar">
                            <button
                                type="button"
                                name="editar"
                                id="editar"
                                className="buttons"
                                value="Atualizar"
                                onClick={() => setShowUpdateConfirmation(true)} // Mostrar a caixa de diálogo de confirmação
                            >
                                Atualizar
                            </button>
                        
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
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {showDeleteConfirmation && (
                <section className="container">
                    <div className="card">
                        <p>Deseja deletar o cliente?</p>
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
                        <p>Deseja atualizar o cliente?</p>
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
