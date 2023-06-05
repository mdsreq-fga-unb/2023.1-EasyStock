import React from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { Tabela } from "../estoque/EstoqueStyled";
import { clients } from "../../Datas";
import { CardClient } from "../../Card/Card";
import ModalCliente from "./ModalCliente";
import { useState } from "react";

export default function Cliente() {
    const [openModal, setOpenModal] = useState(false);

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
                        {clients.map ((client) => (
                            <CardClient key={client.dividendo} client={client} />
                        ))}
                    </tbody>
                </table>

                <button onClick={() => setOpenModal(true)}>Adicionar Produtos</button>
                <ModalCliente isOpen={openModal} onClose={() => setOpenModal(!openModal)}/>
            </Tabela>
        </>
    );
}
