//trazendo o react
import React from "react";
//trazendo o react dom (manipular o dom)
import ReactDOM from "react-dom/client";
//importando o app - componente
import App from "./App.jsx";

import { Fragment } from "react";
import { createBrowserRouter, RouterProvider, Route, Routes, BrowserRouter } from "react-router-dom";

//importando paginas
import Inicio from "./pages/Inicio/Inicio.jsx";
import Estoque from "./pages/estoque/Estoque.jsx";
import Erro from "./pages/erro/Error.jsx";
import Cliente from "./pages/cliente/Cliente.jsx";
import Caixa from "./pages/caixa/Caixa.jsx";
import Login from "./pages/login/Login.jsx";
import useAuth from "./hooks/useAuth.jsx";

const Private = ({ Item }) => {
    const signIn = true;

    return signIn > 0 ? <Item /> : <Login />;
}

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Inicio />,
//     },
//     {
//         path: "/estoque",
//         element: <Estoque />,
//     },
// ]);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Erro />,
        children: [
            {
                path: "/",
                element: <Login />,
            },
            {
                path: "/inicio",
                element: <Private Item={Inicio}/>,
            },
            {
                path: "/estoque",
                element: <Private Item={Estoque}/>,
            },
            {
                path: "/cliente",
                element: <Private Item={Cliente}/>,
            },
            {
                path: "/caixa",
                element: <Private Item={Erro}/>,
            },
            {
                path: "/relatorio",
                element: <Private Item={Erro}/>,
            },
            {
                path: "/dashboard",
                element: <Private Item={Erro}/>,
            },
            {
                path: "*",
                element: <Login />,
            }
        ],
    },
]);



// const RoutesApp = () => {
//         <BrowserRouter>
//             <Fragment>
//                 <Routes>
//                     <Route path="/" element={<App />}/>
//                     <Route path="/" element={<Login />}/>
//                     <Route exact path="/inicio" element={<Private Item={Inicio}/>}/>
//                     <Route exact path="/estoque" element={<Private Item={Estoque}/>}/>
//                     <Route exact path="/cliente" element={<Private Item={Cliente}/>}/>
//                     <Route exact path="/caixa" element={<Private Item={Caixa}/>}/>
//                     <Route path="*" element={<Login />}/>
//                 </Routes>
//             </Fragment>
//         </BrowserRouter>
// }

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
