import React, { useEffect, useState } from "react";
import { TodoModal } from "../estoque/EstoqueModalStyled";
import { getVendaById } from "../../services/postsServices";

export default function InfoVenda({ isOpen, onClose, selectedVenda }) {
    const [venda, setVenda] = useState(null);

    console.log(selectedVenda);

    document.addEventListener('DOMContentLoaded', function() {

    });

    if (isOpen) {
        function printaProdutos() {
            let string = '';
            for (let i = 0; i < selectedVenda.produtos.length; i++) {
                string = string + `Produto ${i+1}: 
                ${selectedVenda.produtos[i].produto.nome}, 
                Preço Custo: ${selectedVenda.produtos[i].produto.precoCusto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}, 
                Quantidade: ${selectedVenda.produtos[i].quantidade}\n`;
            }
            //console.log(string);
            //document.getElementById('produtos-container').innerHTML = string;
            return string;
        }
    
        const qtd = printaProdutos();

        return (
            <TodoModal>
                <div className="container">
                    <div className="card">
                        <h1>Venda: {selectedVenda._id}</h1>
                        <div className="infoVenda">
                            <h3 id="produtos-container">{qtd}</h3>

                            <h3>Preço Total: {selectedVenda.precoTotal
                                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>

                            <h3>Tipo do Pagamento: {selectedVenda.tipoPagamento}</h3>

                            <h3>Tipo de Entrega: {selectedVenda.tipoEntrega}</h3>                        

                            <h3>Data da venda: {selectedVenda.dataPedido}</h3>

                        </div>
                        <div className="alinharVenda">
                            <button className="button-modalc" onClick={onClose}>
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            </TodoModal>
        );
    }
    return null;
}
