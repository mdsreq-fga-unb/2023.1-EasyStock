import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { Tabela } from "../estoque/EstoqueStyled";
import { getAllFuncionarios } from "../../services/postsServices";
import { sessionStatus } from "../../contexts/AuthContext";
import { CardFuncionario } from "../../Card/Card";
import { useNavigate } from "react-router-dom";

export default function Funcionario() {
    const [funcionarios, setFuncionarios] = useState([]);
    const navigate = useNavigate();

    async function findAllFuncionarios() {
        const response = await getAllFuncionarios();
        setFuncionarios(response.data);
    }

    useEffect(() => {
        sessionStatus(navigate);
        findAllFuncionarios();
    }, []);

    return (
        <>
            <NavBar />

            <Tabela>
                <table>
                    <caption>
                        <h3>Lista de Funcionários</h3>
                    </caption>
                    <thead>
                        <tr>
                            <th>Funcionário</th>
                            <th>Usuário</th>
                            <th>senha?</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Data Contratação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {funcionarios.map((funcionario) => (
                            <CardFuncionario
                                key={funcionario._id}
                                funcionario={funcionario}
                            />
                        ))}
                    </tbody>
                </table>
                <button
                    className="botao-principal"
                    onClick={() => setOpenModal(true)}
                >
                    Cadastrar Funcionário
                </button>

            </Tabela>
        </>
    );
}
