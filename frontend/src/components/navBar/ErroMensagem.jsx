import React from "react";
import { Div } from "./ErroStyled";

export default function ErroMensagem(msg) {
    return (
        <Div>
            <h3>
                <i class="bi-x-circle"></i> Erro
            </h3>
            <p>{msg}</p>
            <button>Fechar</button>
        </Div>
    );
}
