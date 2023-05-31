import "./App.css";
import { GlobalStyled } from "./GlobalStyled";
import Estoque from "./pages/Estoque/Estoque";
//App,jsx vai praticamente virar as rotas entre os componentes
function App() {
    return (
        <>
            <GlobalStyled />

            <Estoque />
        </>
    );
}

export default App;
