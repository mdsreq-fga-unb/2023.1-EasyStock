import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { CardCaixa, CardProduto } from "../../Card/Card";
import CaixaModal from "./CaixaModal";
import {
    BotaoCaixa,
    DivTabela,
    PesquisaCaixa,
    Tabela1,
    Tabela2,
    TabelasContainer,
} from "./CaixaStyled";
import { useNavigate } from "react-router-dom";
import { sessionStatus, sessionStatusAdmin } from "../../contexts/AuthContext";
import { getProductByPdv } from "../../services/postsServices";
import { getAllPosts } from "../../services/postsServices";
import swal from "sweetalert";

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
    const [data, setData] = useState(null);
    const [modalData, setModalData] = useState(null);
    const [dataPedido, setDataPedido] = useState(null);

    async function findAllPosts() {
        const response = await getAllPosts();
        setProducts(response.data);
    }

    useEffect(() => {
        sessionStatus(navigate).then(() => findAllPosts());
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let formData = {
            codigoPDV,
            quantidade,
        };

        if (quantidade <= 0) return;

        const dataProduto = await getProductByPdv(codigoPDV);

        if (!dataProduto) return;

        for (let i = 0; i < cont; i++) {
            let num = JSON.stringify(caixa[i].codigoPDV).replace(/"/g, ""); // Remove as aspas duplas do 'caixa[i].codigoPDV'

            if (parseInt(codigoPDV) == parseInt(num)) {
                await swal(
                    "Erro!",
                    "Este produto já foi inserido no carrinho!",
                    "error"
                );
                return;
            }
        }

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
            _id
        };

        let formDataPedido = {
            produto: _id,
            quantidade,
        };

        // Armazenar os dados do formulário na variável "data"
        setData(formData);
        setDataPedido(formDataPedido);

        caixa[cont] = formData;
        produtos[cont] = formDataPedido;
        cont++;
    };

    const removeCarrinho = (caixa, produtos, ccaixa) => {
        const index = produtos.findIndex((produto) => produto.produto === ccaixa._id);
    
        if (index !== -1) {
            caixa.splice(index, 1);
            produtos.splice(index, 1);
            cont--;
    
            caixa = [...caixa];
            produtos = [...produtos];
        }
        valorTotal[0] = valorTotal[0] - ccaixa.precoTotal;
        precoTotalPedido = precoTotalPedido - ccaixa.precoTotal;
        console.log(valorTotal[0]);

        setData(caixa);
        setDataPedido(produtos);
    };

    function enviaProdutos(pedido) {
        if (pedido.produtos.length > 0) {
            setModalData(pedido);

            setOpenModal(true);
        }
    }

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
                <DivTabela>
                    <Tabela1>
                        <table>
                            <caption>
                                <h3>Pagamento</h3>
                            </caption>
                            <thead>
                                <tr>
                                    <th className="primeiroTH">Código PDV</th>
                                    <th>Nome</th>
                                    <th>Quantidade</th>
                                    <th>Preço Unitário</th>
                                    <th className="ultimoTH">Preço Total</th>
                                    <th className="diminuir">i</th>
                                </tr>
                            </thead>
                            <tbody>
                                {caixa.map((ccaixa) => (
                                    <CardCaixa
                                        key={ccaixa.codigoPDV}
                                        caixa={ccaixa}
                                        onSelect={() => removeCarrinho(caixa, produtos, ccaixa)}
                                    />
                                ))}
                            </tbody>
                        </table>

                        <CaixaModal
                            isOpen={openModal}
                            onClose={() => setOpenModal(!openModal)}
                            infoPedido={modalData}
                        />
                    </Tabela1>
                    <BotaoCaixa>
                        <button
                            className="botao-principal"
                            onClick={() => {
                                enviaProdutos(pedido);
                            }}
                        >
                            Pagamento
                        </button>
                    </BotaoCaixa>
                </DivTabela>
                <Tabela2>
                    <table>
                        <caption>
                            <h3>Produtos do Estoque</h3>
                        </caption>
                        <thead>
                            <tr>
                                <th className="primeiroTH">Código PDV</th>
                                <th>Nome</th>
                                <th className="ultimoTH"> Quantidade</th>
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
