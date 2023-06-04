import { Produtos } from "./CardStyled";

export function Card({ product }) {
    return (
        <Produtos>
            <td>{product.nome}</td>
            <td>{product.precoCusto}</td>
            <td>{product.precoVenda}</td>
            <td>{product.qtdEstoque}</td>
            <td>{product.codigoPDV}</td>
            <td>{product.statusVenda}</td>
        </Produtos>
    );
}
