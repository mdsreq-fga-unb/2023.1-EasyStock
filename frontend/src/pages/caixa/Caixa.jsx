import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/navBar/NavBar";
import {Tabela } from "../estoque/EstoqueStyled";
//import { caixas } from "../../Datas";
import { CardCaixa } from "../../Card/Card";
import CaixaModal from "./CaixaModal";
import { PesquisaCaixa } from "./CaixaStyled";
import { useNavigate } from "react-router-dom";
import { sessionStatus } from "../../contexts/AuthContext";
import { getAllCaixa } from "../../services/postsServices";


export default function Caixa() {
    const [openModal, setOpenModal] = useState(false);
    const [caixa, setCaixa] = useState([]);
    const navigate = useNavigate();

    async function findAllCaixa(){
        const response = await getAllCaixa();
        setCaixa(response.data);

    }
    useEffect(() => {
        sessionStatus(navigate);

        findAllCaixa();
    }, []);


    return (
        <>
            <NavBar />

            <PesquisaCaixa>
                <form>
                    <div>
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder="Código ou nome" />
                    </div>
                    <div>
                        <input
                            type="number"
                            name="qtd"
                            id="qtd"
                            placeholder="Quantidade"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            name="Adicionar Produto"
                            id="adicionar"
                            className="buttons"
                            value={"Adicionar"}
                        />
                    </div>
                    <div className="valor">
                        <p> VALOR: "0"</p>
                    </div>
                </form>
            </PesquisaCaixa>

            <Tabela>
                <table>
                    <thead>
                        <tr>
                            <th>codigoPDV</th>
                            <th>Nome</th>
                            <th>Qtd</th>
                            <th>Preço unt</th>
                            <th>Preço ttl</th>
                        </tr>
                    </thead>
                    <tbody>
                        {caixa.map((caixa) => (
                            <CardCaixa key={caixa._id} caixa={caixa} />
                        ))}
                    </tbody>
                </table>
                <div>
                    <button
                        className="botao-principal"
                        onClick={() => setOpenModal(true)}
                    >
                        Pagamento
                    </button>
                </div>

                <CaixaModal
                    isOpen={openModal}
                    onClose={() => setOpenModal(!openModal)}
                />
            </Tabela>
        </>
    );
}
