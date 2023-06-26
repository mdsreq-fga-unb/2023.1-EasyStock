import { Card } from "../../Card/Card";
import { NavBar } from "../../components/navBar/NavBar";
import { products } from "../../Datas";
import { Tabela } from "../estoque/EstoqueStyled";
import EstoqueModal from "../estoque/EstoqueModal";
import { useState } from "react";
import { getAllPosts, searchProduct } from "../../services/postsServices";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProdutoModal from "../estoque/ProdutoModal";
import { sessionStatus } from "../../contexts/AuthContext";
import { PesquisaCaixa } from "../caixa/CaixaStyled";

export default function Estoque() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [openEstoqueModal, setOpenEstoqueModal] = useState(false);
    const [openProdutoModal, setOpenProdutoModal] = useState(false);
    const navigate = useNavigate();

    async function findAllPosts() {
        const response = await getAllPosts();
        setProducts(response.data);
    }

    useEffect(() => {
        sessionStatus(navigate);

        findAllPosts();
    }, []);

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
        setOpenProdutoModal(true);
    };

    return (
        <>
            <NavBar />

            {/* <PesquisaCaixa>
                <form>
                    <div>
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder="Código ou nome" />
                    </div>
                    <div>
                        <input
                            type="submit"
                            name="Pesquisar Produto"
                            id="pesquisar"
                            className="buttons"
                            value={"Pesquisar"}
                        />
                    </div>
                </form>
            </PesquisaCaixa> */}

            <Tabela>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço Custo</th>
                            <th>Preço venda</th>
                            <th>Qtd Estoque</th>
                            <th>Qtd Min Estoque</th>
                            <th>Medida</th>
                            <th>CódigoPDV</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <Card
                                key={product.codigoPDV}
                                product={product}
                                onSelect={handleProductSelect}
                            />
                        ))}
                    </tbody>
                </table>

                <button
                    className="botao-principal"
                    onClick={() => setOpenEstoqueModal(true)}
                >
                    Adicionar Produtos
                </button>
                <EstoqueModal
                    isOpen={openEstoqueModal}
                    onClose={() => setOpenEstoqueModal(false)}
                />
                <ProdutoModal
                    isOpen={openProdutoModal}
                    onClose={() => setOpenProdutoModal(false)}
                    selectedProduct={selectedProduct}
                />
            </Tabela>
        </>
    );
}
