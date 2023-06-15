import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/navBar/NavBar";
import {Tabela } from "../estoque/EstoqueStyled";
//import { caixas } from "../../Datas";
import { CardCaixa } from "../../Card/Card";
import CaixaModal from "./CaixaModal";
import { PesquisaCaixa } from "./CaixaStyled";
import { useNavigate } from "react-router-dom";
import { sessionStatus } from "../../contexts/AuthContext";
import { getAllCaixa, getProductByPdv } from "../../services/postsServices";

let cont = 0;
let caixa = [];

export default function Caixa() {
    const [openModal, setOpenModal] = useState(false);
    const [codigoPDV, setCodigoPDV] = useState();
    const [quantidade, setQuantidade] = useState();
    //const [caixa, setCaixa] = useState([]);
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    //console.log(cont);
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let formData = {
            codigoPDV,
            quantidade
        };

        const dataProduto = await getProductByPdv(codigoPDV);

        const { nome, precoVenda } = dataProduto.data;

        const precoTotal = precoVenda*quantidade;

        formData = {
            codigoPDV,
            quantidade,
            nome,
            precoVenda,
            precoTotal
        }

        // Armazenar os dados do formulário na variável "data"
        setData(formData);
        console.log(formData);

        //setCaixa(formData);
        caixa[cont] = formData;
        cont++;
        console.log(caixa);

        // Mostrar a caixa de diálogo de confirmação
        //setShowConfirmation(true);
    };

    useEffect(() => {
        sessionStatus(navigate);

        //findAllCaixa();
    }, []);


    return (
        <>
            <NavBar />

            <PesquisaCaixa>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <i className="bi bi-search"></i>
                        <input 
                            type="number"
                            placeholder="Código do produto"
                            required
                            onChange={(e) => setCodigoPDV(e.target.value)} 
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            name="qtd"
                            id="qtd"
                            placeholder="Quantidade"
                            required
                            onChange={(e) => setQuantidade(e.target.value)}
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
                            <th>Código PDV</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Preço Unitário</th>
                            <th>Preço Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {caixa.map((caixa) => (
                            <CardCaixa key={caixa.codigoPDV} caixa={caixa} />
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
