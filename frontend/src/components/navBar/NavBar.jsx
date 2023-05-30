import logo from "../../images/LOGOeasystock.png";
import "./NavBar.css";
export function NavBar() {
  return (
    <>
      <nav>
        <div>
          <a href="#inicio">
            <img className="imagem-logo" src={logo} alt="Logo EasyStock" />
          </a>
        </div>

        <div className="botoes-principais">
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
        </div>
      </nav>
    </>
  );
}
