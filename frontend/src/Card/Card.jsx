export function Card({news}) {
    return (
        <section>
            <p>{news.iten}</p>
            <p>{news.nome}</p>
            <p>{news.descri}</p>
            <p>{news.qtd}</p>
            
        </section>
    );
}
/* <i className="bi bi-pencil-square"></i> */