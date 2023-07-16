import React from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { Botao, Div, Tabela } from "../estoque/EstoqueStyled";
import { CardClient } from "../../Card/Card";
import ModalCliente from "./ModalCliente";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sessionStatusAdmin } from "../../contexts/AuthContext";
import { getAllClients } from "../../services/postsServices";
import NomeModal from "./NomeModal";

export default function Cliente() {
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    const [selectedClient, setSelectedClient] = useState(null);
    const [openNomeModal, setOpenNomeModal] = useState(false);
    const [clients, setClients] = useState([]);

    async function findAllClients() {
        const response = await getAllClients();
        setClients(response.data);
    }

    useEffect(() => {
        sessionStatusAdmin(navigate).then(() => findAllClients());
    }, []);

    const handleProductSelect = (client) => {
        setSelectedClient(client);
        setOpenNomeModal(true);
    };

    return (
        <>
            <NavBar />
            <Div>
                <Tabela>
                    <table>
                        <caption>
                            <h3>Lista de Clientes</h3>
                        </caption>
                        <thead>
                            <tr>
                                <th className="primeiroTH">Cliente</th>
                                <th>Telefone</th>
                                <th>Email</th>
                                <th className="ultimoTH">Dívida</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <CardClient
                                    key={client._id}
                                    client={client}
                                    onSelect={handleProductSelect}
                                />
                            ))}
                        </tbody>
                    </table>

                    <ModalCliente
                        isOpen={openModal}
                        onClose={() => setOpenModal(false)}
                    />
                    <NomeModal
                        isOpen={openNomeModal}
                        onClose={() => setOpenNomeModal(false)}
                        selectedClient={selectedClient}
                    />
                </Tabela>
                <Botao>
                    <button
                        className="botao-principal"
                        onClick={() => setOpenModal(true)}
                    >
                        Adicionar cliente
                    </button>
                </Botao>
            </Div>
        </>
    );
}
