import { NavBar } from "../../components/navBar/NavBar";
import { Section, CirculoAzul, CirculoBranco } from "./InicioStyled";
import Icone from "../../images/imagemInicioMeninas.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sessionStatus } from "../../contexts/AuthContext";

export default function Inicio() {
    const navigate = useNavigate();

    useEffect(() => {
        sessionStatus(navigate);
    }, []);

    

    return (
        <>
            <NavBar />
            <Section>
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
            </Section>
        </>
    );
}
