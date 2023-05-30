import logo from "../../images/LOGOeasystock.png";
import { BarraPrincipal, ImgLogo, Nav } from "./NavBarStyled";

export function NavBar() {
  return (
    <>
      <Nav>
        <div>
          <a href="#inicio">
            <ImgLogo src={logo} alt="Logo EasyStock" />
          </a>
        </div>

        <BarraPrincipal>
          <ul>
            <li>
              <a href="#inicio">INICIO</a>
            </li>

            <li>
              <a href="#"> CAIXA</a>
            </li>
            <li>
              <a href="#"> CLIENTE</a>
            </li>
            <li>
              <a href="#"> ESTOQUE</a>
            </li>
            <li>
              <a href="#"> RELATORIO</a>
            </li>
            <li>
              <a href="#"> DASHBOARD</a>
            </li>
          </ul>
        </BarraPrincipal>
      </Nav>
    </>
  );
}
