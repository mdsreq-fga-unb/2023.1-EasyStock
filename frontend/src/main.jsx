//trazendo o react
import React from "react";
//trazendo o react dom (manipular o dom)
import ReactDOM from "react-dom/client";
//importando o app - componente
import App from "./App.jsx";

import { Fragment } from "react";
import { createBrowserRouter, RouterProvider, Route, Routes, BrowserRouter } from "react-router-dom";

//importando paginas
import Inicio from "./pages/inicio/Inicio.jsx";
import Estoque from "./pages/estoque/Estoque.jsx";
import Erro from "./pages/erro/Error.jsx";
import Cliente from "./pages/cliente/Cliente.jsx";
import Caixa from "./pages/caixa/Caixa.jsx";
import Login from "./pages/login/Login.jsx";
import useAuth from "./hooks/useAuth.jsx";
import Funcionario from "./pages/funcionario/Funcionario.jsx";
import Venda from "./pages/venda/Venda.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";


const Private = ({ Item }) => {
    const signIn = true;

    return signIn > 0 ? <Item /> : <Login />;
}

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
                element: <Private Item={Caixa}/>,
            },
            {
                path: "/funcionario",
                element: <Private Item={Funcionario}/>,
            },
            {
                path: "/venda",
                element: <Private Item={Venda}/>,
            },
            {
                path: "/dashboard",
                element: <Private Item={Dashboard}/>,
            },
            {
                path: "*",
                element: <Login />,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
