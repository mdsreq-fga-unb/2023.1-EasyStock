export function Card({products}) {
    return (
        <section>
            <p>{products.nome}</p>
            <p>{products.precoCusto}</p>
            <p>{products.precoVenda}</p>
            <p>{products.qtdEstoque}</p>
            <p>{products.codigoPDV}</p>
            <p>{products.statusVenda}</p>
            
        </section>
    );
}
/* <i className="bi bi-pencil-square"></i> */