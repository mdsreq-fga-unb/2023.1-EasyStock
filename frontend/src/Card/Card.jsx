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

export function CardClient({client}){
    return(
        <Produtos>
            <td>{client.cliente}</td>
            <td>{client.dividendo}</td>
            <td>{client.statusDividada}</td>
        </Produtos>
    )
}
