import { GlobalStyled } from "./GlobalStyled.js";
//App,jsx vai praticamente virar as rotas entre os componentes
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <AuthProvider>
            <GlobalStyled />
            <Outlet />
        </AuthProvider>
    );
}

export default App;
