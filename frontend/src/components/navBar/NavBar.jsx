import logo from "../../images/LOGOeasystock.png";
import { BarraPrincipal, ImgLogo, Nav } from "./NavBarStyled";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export function NavBar() {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    async function terminateSession() {
        await signOut(navigate);

        window.location.reload();
    }

    return (
        <>
            <Nav>
                <div>
                    <Link to="/inicio">
                        <ImgLogo src={logo} alt="Logo EasyStock" />
                    </Link>
                </div>
                {/* <button className="menu-toggle">
                    <i className="bi bi-border-width"></i>
                </button> */}

                <BarraPrincipal>
                    <ul>
                        <li>
                            <Link to="/inicio">INICIO</Link>
                        </li>

                        <li>
                            <Link to="/caixa">CAIXA</Link>
                        </li>
                        <li>
                            <Link to="/cliente">CLIENTE</Link>
                        </li>
                        <li>
                            <Link to="/funcionario">FUNCIONARIO</Link>
                        </li>
                        <li>
                            <Link to="/estoque">ESTOQUE</Link>
                        </li>

                        <li>
                            <Link to="/venda">VENDAS</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">DASHBOARD </Link>
                        </li>
                    </ul>
                </BarraPrincipal>
                <Link className="sair" onClick={() => terminateSession()}>
                    SAIR
                </Link>
            </Nav>
        </>
    );
}
