//trazendo o react
import React from "react";
//trazendo o react dom (manipular o dom)
import ReactDOM from "react-dom/client";
//importando o app - componente
import App from "./App.jsx";

//importando paginas
import Inicio from "./pages/Inicio/Inicio";
import Estoque from "./pages/Estoque/Estoque";
import Erro from "./pages/erro/Error.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
                element: <Inicio />,
            },
            {
                path: "/estoque",
                element: <Estoque />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
