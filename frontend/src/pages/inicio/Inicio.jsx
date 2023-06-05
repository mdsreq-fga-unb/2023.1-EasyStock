import { NavBar } from "../../components/navBar/NavBar";
export default function Inicio() {
    return (
        <>
            <NavBar />
            <body>
                <div>
                    <h1>
                        UM JEITO FÁCIL DE
                        <br /> CONTROLAR O ESTOQUE!
                    </h1>
                    <p>Com nosso novo site é possível controlar o estoque de sua loja, fazer vendas, obter relatórios e ter controle de seus clientes. </p>
                </div>
                <div className="bola-branca"></div>
                <div className="bola-pequena"></div>
                <div className="icone"></div>
            </body>
        </>
    );
}
