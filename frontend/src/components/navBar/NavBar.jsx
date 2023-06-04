import logo from "../../images/LOGOeasystock.png";
import { BarraPrincipal, ImgLogo, Nav } from "./NavBarStyled";
import { Link } from "react-router-dom";

export function NavBar() {
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
                            <Link to="/" end>
                                INICIO
                            </Link>
                        </li>

                        <li>
                            <Link to="/asd">CAIXA</Link>
                        </li>
                        <li>
                            <Link to="/asd">CLIENTE</Link>
                        </li>
                        <li>
                            <Link to="/estoque" end>
                                ESTOQUE
                            </Link>
                        </li>

                        <li>
                            <Link to="/asd">RELATÓRIO</Link>
                        </li>
                        <li>
                            <Link to="/asd">DASHBOARD</Link>
                        </li>
                    </ul>
                </BarraPrincipal>
            </Nav>
        </>
    );
}
