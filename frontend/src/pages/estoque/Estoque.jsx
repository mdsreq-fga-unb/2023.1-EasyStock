import { Card } from "../../Card/Card";
import { NavBar } from "../../components/navBar/NavBar";
import { products } from "../../Datas";
import { PesquisaProduto, Tabela } from "../estoque/EstoqueStyled";
import EstoqueModal from "../estoque/EstoqueModal";
import { useState } from "react";

export default function Estoque() {
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <>
            <NavBar />

            <PesquisaProduto>
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Código ou nome do produto" />
            </PesquisaProduto>

            <Tabela>
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

                <button onClick={() => setOpenModal(true)}>Adicionar Produtos</button>
                <EstoqueModal isOpen={openModal} onClose={() => setOpenModal(!openModal)} />
            </Tabela>
        </>
    );
}
