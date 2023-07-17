import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { useNavigate } from "react-router-dom";
import { getAllVendas, getVendaById } from "../../services/postsServices";
import { sessionStatusAdmin } from "../../contexts/AuthContext";
import { Div, Tabela } from "../estoque/EstoqueStyled";
import { CardVenda } from "../../Card/Card";
import InfoVenda from "./InfoVenda";

export default function Venda() {
    const navigate = useNavigate();
    const [vendas, setVendas] = useState([]);

    const [selectedVenda, setSelectedVenda] = useState(null);
    const [openPedidosModal, setOpenPedidosModal] = useState(null);

    async function findAllVendas() {
        const response = await getAllVendas();
        setVendas(response.data);
    }

    useEffect(() => {
        sessionStatusAdmin(navigate).then(() => findAllVendas());
    }, []);

    const handleProductSelect = async (venda) => {
        const vendaCompleta = await getVendaById(venda._id);
        setSelectedVenda(vendaCompleta.data);
        setOpenPedidosModal(true);
    };

    return (
        <>
            <NavBar />

            <Div>
                <Tabela>
                    <table>
                        <caption>
                            <h3>Lista de Vendas</h3>
                        </caption>
                        <thead>
                            <tr>
                                <th className="primeiroTH">Preço</th>
                                <th>Pagamento</th>
                                <th>Entrega</th>
                                <th className="ultimoTH">Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendas.map((venda) => (
                                <CardVenda
                                    key={venda._id}
                                    venda={venda}
                                    onSelect={handleProductSelect}
                                />
                            ))}
                        </tbody>
                    </table>
                    <InfoVenda
                        isOpen={openPedidosModal}
                        onClose={() => setOpenPedidosModal(false)}
                        selectedVenda={selectedVenda}
                    />
                </Tabela>
            </Div>
        </>
    );
}
