import React, { useState } from "react";
import { TodoModal } from "../estoque/EstoqueModalStyled";
import { postFuncionario } from "../../services/postsServices";
import { format, parseISO } from 'date-fns'

export default function FuncionarioModal({ isOpen, onClose }) {
    const [nomeCompleto, setNomeCompleto] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    const [dataContratacao, setDataContrato] = useState();
    const [data, setData] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const formatDate = (date) => {
        const dateObject = parseISO(date);
        //const localDate = new Date(dateObject.getTime() - dateObject.getTimezoneOffset() * 60000);
        
        return format(dateObject, 'dd/MM/yyyy');
    };

    const createForm = (e) => {
        e.preventDefault();

        if (telefone) {
            if (telefone.length !== 10 && telefone.length !== 11) {
                alert("O número de telefone deve ter 10 ou 11 dígitos");
                return;
            }
        }
        const formData = {
            nomeCompleto,
            username,
            password,
            telefone,
            email,
            dataContratacao: formatDate(dataContratacao),
        };

        setData(formData);
        setShowConfirmation(true);
    };

    const handleConfirmation = async (confirmed) => {
        if (confirmed) {
            if (data) {
                await postFuncionario(data);
            }
        }
        setShowConfirmation(false);
    };

    if (isOpen) {
        return (
            <TodoModal>
                <div className="container">
                    <div className="card">
                        <h1>Cadastro Funcionário</h1>
                        <form
                            onSubmit={async (e) =>
                                await createForm(e).then(onClose)
                            }
                        >
                            <div className="label-float">
                                <input
                                    type="text"
                                    id="nome"
                                    placeholder="Nome do Funcionário"
                                    required
                                    onChange={(e) =>
                                        setNomeCompleto(e.target.value)
                                    }
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="text"
                                    id="user"
                                    placeholder="Usuário"
                                    required
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </div>

                            <div className="label-float">
                                <input
                                    type="password"
                                    id="senha"
                                    placeholder="Senha"
                                    required
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="tel"
                                    id="telefone"
                                    placeholder="Telefone"
                                    onChange={(e) =>
                                        setTelefone(e.target.value)
                                    }
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="date"
                                    id="data"
                                    placeholder="Data"
                                    required
                                    onChange={(e) =>
                                        setDataContrato(e.target.value)
                                    }
                                />
                            </div>
                            <div className="alinhar">
                                <input 
                                    type="submit"
                                    name="Adicionar funcionário"
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
                {showConfirmation && (
                    <section className="container">
                        <div className="card">
                            <p>Deseja cadastrar funcionário?</p>
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
