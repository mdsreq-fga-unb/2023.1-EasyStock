import { NavBar } from "../../components/navBar/NavBar";
import { Body, CirculoAzul, CirculoBranco } from "./InicioStyled";
import Icone from "../../images/imagemInicioMeninas.png";

export default function Inicio() {
    return (
        <>
            <NavBar />
            <Body>
                <div>
                    <h1>
                        Um Jeito Fácil De
                        <br /> Controlar o Estoque!
                    </h1>
                    <p>
                        Com nosso novo site é possível controlar o estoque de
                        sua loja, fazer vendas, obter relatórios e ter controle
                        de seus clientes.{" "}
                    </p>
                </div>
                <CirculoBranco />
                <CirculoAzul />
                <img src={Icone} alt="Logo meninas" />
            </Body>
        </>
    );
}
