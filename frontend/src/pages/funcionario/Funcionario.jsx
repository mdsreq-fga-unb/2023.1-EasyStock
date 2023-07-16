import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { Botao, Div, Tabela } from "../estoque/EstoqueStyled";
import { getAllFuncionarios } from "../../services/postsServices";
import { sessionStatusAdmin } from "../../contexts/AuthContext";
import { CardFuncionario } from "../../Card/Card";
import { useNavigate } from "react-router-dom";
import FuncionarioModal from "./FuncionarioModal";
import EditarFuncionario from "./EditarFuncionario";

export default function Funcionario() {
    const [funcionarios, setFuncionarios] = useState([]);
    const navigate = useNavigate();
    const [openFuncionarioModal, setOpenFuncionarioModal] = useState(false);
    const [openEditarFuncionarioModal, setOpenEditarFuncionarioModal] =
        useState(false);
    const [selectedFuncionario, setSelectedFuncionario] = useState(null);

    async function findAllFuncionarios() {
        const response = await getAllFuncionarios();
        setFuncionarios(response.data);
    }

    useEffect(() => {
        sessionStatusAdmin(navigate).then(() => findAllFuncionarios());
    }, []);

    const handleFuncionarioSelect = (funcionario) => {
        setSelectedFuncionario(funcionario);
        setOpenEditarFuncionarioModal(true);
    };

    return (
        <>
            <NavBar />

            <Div>
                <Tabela>
                    <table>
                        <caption>
                            <h3>Lista de Funcionários</h3>
                        </caption>
                        <thead>
                            <tr>
                                <th className="primeiroTH">Funcionário</th>
                                <th>Usuário</th>
                                <th>Telefone</th>
                                <th>Email</th>
                                <th className="ultimoTH">Data Contratação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {funcionarios.map((funcionario) => (
                                <CardFuncionario
                                    key={funcionario._id}
                                    funcionario={funcionario}
                                    onSelect={handleFuncionarioSelect}
                                />
                            ))}
                        </tbody>
                    </table>
                    <FuncionarioModal
                        isOpen={openFuncionarioModal}
                        onClose={() => setOpenFuncionarioModal(false)}
                    />
                    <EditarFuncionario
                        isOpen={openEditarFuncionarioModal}
                        onClose={() => setOpenEditarFuncionarioModal(false)}
                        selectedFuncionario={selectedFuncionario}
                    />
                </Tabela>
                <Botao>
                    <button
                        className="botao-principal"
                        onClick={() => setOpenFuncionarioModal(true)}
                    >
                        Cadastrar Funcionário
                    </button>
                </Botao>
            </Div>
        </>
    );
}
