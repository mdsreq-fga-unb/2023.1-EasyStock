import React from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { Tabela } from "../estoque/EstoqueStyled";
//import { clients } from "../../Datas";
import { CardClient } from "../../Card/Card";
import ModalCliente from "./ModalCliente";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sessionStatus } from "../../contexts/AuthContext";
import { getAllClients } from "../../services/postsServices";

export default function Cliente() {
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    const [clients, setClients] = useState([]);

    async function findAllClients() {
        const response = await getAllClients();
        setClients(response.data);
    }

    useEffect(() => {
        sessionStatus(navigate);

        findAllClients();
    }, []);

    const handleProductSelect = (client) => {
        setSelectedProduct(client);
        setOpenProdutoModal(true);
    };

    return (
        <>
            <NavBar />

            <Tabela>
                <table>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Número</th>
                            <th>Email</th>
                            <th>Dividendo</th>
                            {/* <th>Status</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client) => (
                            <CardClient key={client.telefone} client={client} onSelect={handleProductSelect}/>
                        ))}
                    </tbody>
                </table>

                <button
                    className="botao-principal"
                    onClick={() => setOpenModal(true)}
                >
                    Adicionar cliente
                </button>
                <ModalCliente
                    isOpen={openModal}
                    onClose={() => setOpenModal(!openModal)}
                />
            </Tabela>
        </>
    );
}
