import React from "react";
import {
    deleteFuncionario,
    updateFuncionario,
} from "../../services/postsServices";
import { TodoModal } from "../estoque/EstoqueModalStyled";
import { useState } from "react";
import { format, parseISO } from 'date-fns'

export default function EditarFuncionario({
    isOpen,
    onClose,
    selectedFuncionario,
}) {
    const [nomeCompleto, setNomeCompleto] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    const [dataContratacao, setDataContrato] = useState();
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showUpdateConfirmation, setShowUpdateConfirmation] = useState(false);

    // const formatDate = (date) => {
    //     const dateObject = parseISO(date);
    //     //const localDate = new Date(dateObject.getTime() - dateObject.getTimezoneOffset() * 60000);
        
    //     return format(dateObject, 'dd/MM/yyyy');
    // };

    if (!isOpen) {
        return null;
    }
    if (!selectedFuncionario) {
        return null;
    }

    const id = selectedFuncionario._id;

    const handleFormSubmit = async (e, id) => {
        e.preventDefault();

        const data = {
            nomeCompleto,
            username,
            password,
            telefone,
            email,
            dataContratacao,
        };
        await updateFuncionario(id, data);
        //onClose();
    };

    const handleDeleteConfirmation = async (confirmed) => {
        if (confirmed) {
            await deleteFuncionario(id);
            //onClose();
        }
        setShowDeleteConfirmation(false);
    };

    const handleUpdateConfirmation = async (confirmed) => {
        if (confirmed) {
            const data = {
                nomeCompleto,
                username,
                password,
                telefone,
                email,
                //dataContratacao: formatDate(dataContratacao),
            };
            await updateFuncionario(id, data);
            //onClose();
        }
        setShowUpdateConfirmation(false);
    };

    return (
        <TodoModal>
            <div className="container">
                <div className="card">
                    <h1>{selectedFuncionario.nomeCompleto}</h1>
                    <form
                        onSubmit={async (e) =>
                            await handleFormSubmit(e, id).then(onClose)
                        }
                    >
                        <div className="label-float">
                            <input
                                type="text"
                                id="nome"
                                placeholder={`Nome: ${selectedFuncionario.nomeCompleto}`}
                                onChange={(e) =>
                                    setNomeCompleto(e.target.value)
                                }
                            />
                        </div>
                        <div className="label-float">
                            <input
                                type="text"
                                id="user"
                                placeholder={`Usuário: ${selectedFuncionario.username}`}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="label-float">
                            <input
                                type="password"
                                id="senha"
                                placeholder="Nova senha: "
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="label-float">
                            <input
                                type="tel"
                                id="telefone"
                                placeholder={`Número: ${selectedFuncionario.telefone}`}
                                onChange={(e) => setTelefone(e.target.value)}
                            />
                        </div>
                        <div className="label-float">
                            <input
                                type="email"
                                id="email"
                                placeholder={`Email: ${selectedFuncionario.email}`}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="label-float">
                           <h3 className="data-contrato">
                           Data de contratação: {selectedFuncionario.dataContratacao}
                           </h3>
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
                        <p>Deseja atualizar o Funcionário?</p>
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
