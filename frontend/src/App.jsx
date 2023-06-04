import { GlobalStyled } from "./GlobalStyled.js";
import Estoque from "./pages/Estoque/Estoque";
//App,jsx vai praticamente virar as rotas entre os componentes

import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <GlobalStyled />

            <Outlet />
        </>
    );
}

export default App;
