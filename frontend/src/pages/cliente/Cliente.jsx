import React from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { Tabela } from "../estoque/EstoqueStyled";
import { clients } from "../../Datas";
import { CardClient } from "../../Card/Card";
import ModalCliente from "./ModalCliente";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sessionStatus } from "../../contexts/AuthContext";

export default function Cliente() {
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        sessionStatus(navigate);
    }, []);

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
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client, index) => (
                            <CardClient key={index} client={client} />
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
