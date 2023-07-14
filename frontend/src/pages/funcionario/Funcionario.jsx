import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { Tabela } from "../estoque/EstoqueStyled";
import { getAllFuncionarios } from "../../services/postsServices";
import { sessionStatusAdmin } from "../../contexts/AuthContext";
import { CardFuncionario } from "../../Card/Card";
import { useNavigate } from "react-router-dom";
import FuncionarioModal from "./FuncionarioModal";

export default function Funcionario() {
    const [funcionarios, setFuncionarios] = useState([]);
    const navigate = useNavigate();
    const [openFuncionarioModal, setOpenFuncionarioModal] = useState(false);

    async function findAllFuncionarios() {
        const response = await getAllFuncionarios();
        setFuncionarios(response.data);
    }

    useEffect(() => {
        sessionStatusAdmin(navigate)
        .then(() => findAllFuncionarios());
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
                    onClick={() => setOpenFuncionarioModal(true)}
                >
                    Cadastrar Funcionário
                </button>
                <FuncionarioModal
                     isOpen={openFuncionarioModal}
                     onClose={() => setOpenFuncionarioModal(false)}
                />
            </Tabela>
        </>
    );
}
