import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { Tabela } from "../estoque/EstoqueStyled";
import { CardCaixa, CardProduto } from "../../Card/Card";
import CaixaModal from "./CaixaModal";
import {PesquisaCaixa, Tabela1, Tabela2, TabelasContainer} from "./CaixaStyled";
import { useNavigate } from "react-router-dom";
import { sessionStatus } from "../../contexts/AuthContext";
import { getProductByPdv } from "../../services/postsServices";
import { getAllPosts } from "../../services/postsServices";

let cont = 0;
let caixa = [];
let produtos = [];
let valorTotal = [];
let precoTotalPedido = 0;
let pedido = { produtos, valorTotal };

export default function Caixa() {
    const [produtoss, setProducts] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [codigoPDV, setCodigoPDV] = useState();
    const [quantidade, setQuantidade] = useState();
    const navigate = useNavigate();
    const [modalData, setModalData] = useState(null);

    async function findAllPosts() {
        const response = await getAllPosts();
        setProducts(response.data);
    }

    useEffect(() => {
        sessionStatus(navigate)
        .then(() => findAllPosts());
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let formData = {
            codigoPDV,
            quantidade,
        };

        const dataProduto = await getProductByPdv(codigoPDV);

        const { nome, precoVenda, _id } = dataProduto.data;

        const precoTotal = precoVenda * quantidade;

        precoTotalPedido = precoTotalPedido + precoTotal;

        valorTotal[0] = precoTotalPedido;

        formData = {
            codigoPDV,
            quantidade,
            nome,
            precoVenda,
            precoTotal,
        };

        let formDataPedido = {
            produto: _id,
            quantidade,
        };

        caixa[cont] = formData;
        produtos[cont] = formDataPedido;
        cont++;
    };

    function enviaProdutos(pedido) {
        if (pedido.produtos.length > 0) {
            setModalData(pedido);

            setOpenModal(true);
        }
    }

    useEffect(() => {
        sessionStatus(navigate);
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

            <TabelasContainer>
                <Tabela1>
                    <table>
                        <caption>
                            <h3>Pagamento</h3>
                        </caption>
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
                                <CardCaixa
                                    key={caixa.codigoPDV}
                                    caixa={caixa}
                                />
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <button
                            className="botao-principal"
                            onClick={() => {
                                enviaProdutos(pedido);
                            }}
                        >
                            Pagamento
                        </button>
                    </div>

                    <CaixaModal
                        isOpen={openModal}
                        onClose={() => setOpenModal(!openModal)}
                        infoPedido={modalData}
                    />
                </Tabela1>
                <Tabela2>
                    <table>
                        <caption>
                            <h3>Produtos do Estoque</h3>
                        </caption>
                        <thead>
                            <tr>
                                <th>Código PDV</th>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtoss.map((produtoz) => (
                                <CardProduto
                                    key={produtoz.codigoPDV}
                                    produtoz={produtoz}
                                />
                            ))}
                        </tbody>
                    </table>
                </Tabela2>
            </TabelasContainer>
        </>
    );
}
