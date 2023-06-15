import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/navBar/NavBar";
import {Tabela } from "../estoque/EstoqueStyled";
//import { caixas } from "../../Datas";
import { CardCaixa } from "../../Card/Card";
import CaixaModal from "./CaixaModal";
import { PesquisaCaixa } from "./CaixaStyled";
import { useNavigate } from "react-router-dom";
import { sessionStatus } from "../../contexts/AuthContext";
import { getProductByPdv, postPedido } from "../../services/postsServices";

let cont = 0;
let caixa = [];
let produtos = [];
let pedido = { produtos }

export default function Caixa() {
    const [openModal, setOpenModal] = useState(false);
    const [codigoPDV, setCodigoPDV] = useState();
    const [quantidade, setQuantidade] = useState();
    //const [caixa, setCaixa] = useState([]);
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [dataPedido, setDataPedido] = useState(null);

    //console.log(cont);
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let formData = {
            codigoPDV,
            quantidade
        };

        const dataProduto = await getProductByPdv(codigoPDV);

        const { nome, precoVenda, _id } = dataProduto.data;

        const precoTotal = precoVenda*quantidade;

        formData = {
            codigoPDV,
            quantidade,
            nome,
            precoVenda,
            precoTotal
        }

        let formDataPedido = {
            produto: _id,
            quantidade
        }

        // Armazenar os dados do formulário na variável "data"
        setData(formData);
        setDataPedido(formDataPedido);
        console.log(formData);
        console.log(formDataPedido);

        //setCaixa(formData);
        caixa[cont] = formData;
        produtos[cont] = formDataPedido;
        cont++;
        console.log(caixa);
        console.log(JSON.stringify(pedido));

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
                        onClick={
                            async () => await postPedido(pedido)
                            .then(setOpenModal(true)
                            .catch(err))
                        }
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
