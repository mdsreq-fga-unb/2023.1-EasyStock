import { Card } from "../../Card/Card";
import { NavBar } from "../../components/navBar/NavBar";
import { products } from "../../Datas";
import { PesquisaProduto, TabelaEstoque } from "../estoque/EstoqueStyled";

export default function Estoque() {
    return (
        <>
            <NavBar />

            <PesquisaProduto>
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Código ou nome do produto" />
            </PesquisaProduto>

            <TabelaEstoque>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço Custo</th>
                            <th>Preço venda</th>
                            <th>Qtd Estoque</th>
                            <th>CódigoPDV</th>
                            <th>Status Venda</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <Card key={product.codigoPDV} product={product} />
                        ))}
                    </tbody>
                </table>
                <button> Adicionar Produtos</button>
            </TabelaEstoque>
        </>
    );
}
