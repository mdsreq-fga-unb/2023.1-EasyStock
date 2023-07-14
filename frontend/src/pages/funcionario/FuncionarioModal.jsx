import React, { useState } from 'react'
import { TodoModal } from '../estoque/EstoqueModalStyled';

export default function FuncionarioModal({isOpen, onClose}) {
    const [nomeCompleto, setNomeCompleto] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    const [dataContrato, setDataContrato] = useState();

    if (isOpen){
        return(
            <TodoModal>
                <div className="container">
                    <div className="card">
                        <h1>Cadastro Funcionário</h1>
                        <form
                            // onSubmit={async (e) =>
                            //     await createForm(e).then(onClose)
                            // }
                        >
                            <div className="label-float">
                                <input
                                    type="text"
                                    id="nome"
                                    placeholder="Nome do Funcionário"
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="text"
                                    id="nome"
                                    placeholder="Usuário"
                                />
                            </div>

                            <div className="label-float">
                                <input
                                    type="password"
                                    id="senha"
                                    placeholder="Senha"
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="tel"
                                    id="telefone"
                                    placeholder="Telefone"
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="email"
                                />
                            </div>
                            <div className="label-float">
                                <input
                                    type="text"
                                    id="data"
                                    placeholder="Data"
                                />
                            </div>
                            <div className="display-botoes">
                                <input
                                    type="submit"
                                    name="Adicionar funcionário"
                                    id="enviar"
                                    className="buttons"
                                />
                            </div>
                            <div className="display-botoes">
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
        )

    }
    return null;
}
