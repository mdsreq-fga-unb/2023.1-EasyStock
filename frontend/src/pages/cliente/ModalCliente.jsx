import React, { useState } from "react";
import { TodoModal } from "../estoque/EstoqueModalStyled";
import { postCliente } from "../../services/postsServices";
export default function ModalCliente({ isOpen, onClose }) {
    const [nome, setNome] = useState();
    const [telefone, setNumeroTelefone] = useState();
    const [email, setEmail] = useState();
    const [divida, setValorDivida] = useState();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [data, setData] = useState(null);

    const createForm = (e) => {
        e.preventDefault();

        if (telefone) {
            if (telefone.length !== 10 && telefone.length !== 11) {
                alert("O número de telefone deve ter 10 ou 11 dígitos");
                return;
            }
        }

        const formData = {
            nome,
            telefone,
            email,
            divida,
        };

        setData(formData);
        setShowConfirmation(true);
    };

    const handleConfirmation = async (confirmed) => {
        if (confirmed) {
            if (data) {
                await postCliente(data);
            }
        }
        setShowConfirmation(false);
    };

    if (isOpen) {
        return (
            <TodoModal>
                <div className="container">
                    <div className="card">
                        <h1>Adicionar Cliente</h1>
                        <form
                            onSubmit={async (e) =>
                                await createForm(e).then(onClose)
                            }
                        >
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
                                    id="numeroTelefone"
                                    placeholder="Número"
                                    onChange={(e) =>
                                        setNumeroTelefone(e.target.value)
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
                                    type="number"
                                    step="any"
                                    id="valorDivida"
                                    placeholder="Valor da Divida"
                                    onChange={(e) =>
                                        setValorDivida(e.target.value)
                                    }
                                />
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
                {showConfirmation && (
                    <section className="container">
                        <div className="card">
                            <p>Deseja adicionar o cliente?</p>
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
