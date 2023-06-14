import logo from "../../images/LOGOeasystock.png";
import { BarraPrincipal, ImgLogo, Nav } from "./NavBarStyled";
import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth";

export function NavBar() {
    const { signOut } = useAuth();

    async function terminateSession() {
        await signOut();

        window.location.reload();
    }

    return (
        <>
            <Nav>
                <div>
                    <Link to="/">
                        <ImgLogo src={logo} alt="Logo EasyStock" />
                    </Link>
                </div>

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
                            <Link to="/estoque">ESTOQUE</Link>
                        </li>

                        <li>
                            <Link to="/relatorio">RELATÓRIO</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">DASHBOARD</Link>
                        </li>
                        <li>
                            <Link onClick={() => terminateSession()}>SAIR</Link>
                        </li>
                    </ul>
                </BarraPrincipal>
            </Nav>
        </>
    );
}
