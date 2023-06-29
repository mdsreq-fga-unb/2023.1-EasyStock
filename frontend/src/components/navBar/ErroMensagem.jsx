import React from "react";
import { Div } from "./ErroStyled";

export default function ErroMensagem() {
    return (
        <Div>
            <h3>
                <i class="bi-x-circle"></i> Erro
            </h3>
            <p>"Mensagem de erro aqui"</p>
            <button>Fechar</button>
        </Div>
    );
}
