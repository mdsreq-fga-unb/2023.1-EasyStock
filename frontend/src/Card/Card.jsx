import { Produtos } from "./CardStyled";

export function Card({ product, onSelect }) {
    const statusClass = product.statusVenda;

    const handleClick = () => {
        onSelect(product);
    };

    return (
        <Produtos onClick={handleClick}>
            <td>{product.nome}</td>
            <td>{product.precoCusto}</td>
            <td>{product.precoVenda}</td>
            <td>{product.qtdEstoque}</td>
            <td>{product.qtdEstoqueMin}</td>
            <td>{product.medida}</td>
            <td>{product.codigoPDV}</td>
            <td className={statusClass.toString()}>
                {product.statusVenda ? "Ativo" : "Inativo"}
            </td>
        </Produtos>
    );
}

export function CardClient({ client, onSelect }) {
    const handleClick = () => {
        onSelect(client);
    };

    return (
        <Produtos onClick={handleClick}>
            <td>{client.nome}</td>
            <td>{client.telefone}</td>
            <td>{client.email}</td>
            <td>{client.divida}</td>
        </Produtos>
    );
}
export function CardCaixa({ caixa }) {
    return (
        <Produtos>
            <td>{caixa.codigoPDV}</td>
            <td>{caixa.nome}</td>
            <td>{caixa.quantidade}</td>
            <td>{caixa.precoVenda}</td>
            <td>{caixa.precoTotal}</td>
        </Produtos>
    );
}
