import React from "react";
import { TodoModal } from "../estoque/EstoqueModalStyled";
import { useState, useEffect } from "react";
import { postPagamento } from "../../services/postsServices";

export default function ModalCliente({ isOpen, onClose, idPedido }) {
    const [tipoPagamento, setTipoPagamento] = useState();
    const [tipoEntrega, setTipoEntrega] = useState();
    const [valorPago, setValorPago] = useState();
    const [troco, setTroco] = useState(0);

    const [showConfirmation, setShowConfirmation] = useState(false); // Estado para controlar a exibição da caixa de diálogo de confirmação
    const [data, setData] = useState(null); // Variável para armazenar os dados do formulário
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            pedido: idPedido.data.Order._id,
            tipoPagamento,
            tipoEntrega,
            valorPago,
            troco,

        };
        // Armazenar os dados do formulário na variável "data"
        setData(formData);
        console.log(formData);

        // Mostrar a caixa de diálogo de confirmação
        setShowConfirmation(true);
    };

    const handleConfirmation = async (confirmed) => {
        if (confirmed) {
            if (data) {
                // Se o usuário confirmou e os dados do formulário existem

                await postPagamento(data);
                window.location.reload();
            }
        }

        // Fechar a caixa de diálogo de confirmação
        setShowConfirmation(false);
    };

    useEffect(() => {
        if (idPedido && idPedido.data) {
            const valorTotal = idPedido.data.Order.precoTotal;
            let valorTroco = valorPago - valorTotal;
            valorTroco = valorTroco >= 0 ? valorTroco : 0;
            setTroco(valorTroco);
        } else {
            setTroco(0);
        }
    }, [valorPago, idPedido]);

    if (isOpen) {
        const valorTotal =
            idPedido && idPedido.data ? idPedido.data.Order.precoTotal : 0;
        return (
            <TodoModal>
                <div className="container">
                    <div className="card">
                        <h1>Pagamentos</h1>
                        <form onSubmit={handleFormSubmit}>
                            <div className="label-float">
                                <label htmlFor="ValorTotal">
                                    Valor total: R$ {valorTotal}
                                </label>
                            </div>

                            <div className="label-float">
                                <input
                                    type="number"
                                    step="any"
                                    placeholder="Valor Pago:  "
                                    value={valorPago}
                                    onChange={(e) =>
                                        setValorPago(parseFloat(e.target.value))
                                    }
                                />
                            </div>


                            <div className="label-float">
                                <label htmlFor="pagamento">
                                    Tipo de pagamento:
                                </label>
                                <select
                                    name="pagamento"
                                    id="pagamento"
                                    defaultValue="Crédito"
                                    required
                                    onChange={(e) =>
                                        setTipoPagamento(e.target.value)
                                    }
                                >
                                    <option value="Crédito">Crédito</option>
                                    <option value="Débito">Débito</option>
                                    <option value="PIX">PIX</option>
                                    <option value="Dinheiro">Dinheiro</option>
                                    <option value="Fiado">Fiado</option>
                                </select>
                            </div>
                            {/* <div className="label-float">
                                <input
                                    type="number"
                                    step="any"
                                    id="Qtd"
                                    placeholder="Valor recebido"
                                    required
                                    />
                                    </div>
                                    <div className="label-float">
                                    <input
                                    type="number"
                                    step="any"
                                    id="preco"
                                    placeholder="Troco"
                                    required
                                    /> 
                                </div> */}
                            <div className="label-float">
                                <label htmlFor="entrega">
                                    Tipo de entrega:
                                </label>
                                <select
                                    name="entrega"
                                    id="entrega"
                                    defaultValue="Sem Entrega"
                                    required
                                    onChange={(e) =>
                                        setTipoEntrega(e.target.value)
                                    }
                                >
                                    <option value="Sem Entrega">
                                        Sem Entrega
                                    </option>
                                    <option value="Loja">Loja</option>
                                    <option value="Aplicativo">
                                        Aplicativo
                                    </option>
                                </select>
                            </div>
                                <div className="label-float">
                                    <label htmlFor="troco">
                                        TROCO: {troco}
                                    </label>
                                </div>
                            <div className="display-botoes">
                                <input
                                    type="submit"
                                    name="Adicionar Produto"
                                    id="enviar"
                                    className="buttons"
                                    value="Finalizar pedido"
                                />
                            </div>
                            <div className="display-botoes">
                                {/* <button className="button-modal">Adicionar</button> */}
                                <button
                                    className="button-modalc"
                                    onClick={onClose}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Caixa de diálogo de confirmação */}
                {showConfirmation && (
                    <section className="container">
                        <div className="card">
                            <p>Deseja finalizar o pagamento?</p>
                            <div className="separar-botoes">
                                <button
                                    onClick={() => handleConfirmation(true)}
                                >
                                    SIM
                                </button>
                                <button
                                    onClick={() => handleConfirmation(false)}
                                >
                                    NÃO
                                </button>
                            </div>
                        </div>
                    </section>
                )}
            </TodoModal>
        );
    }
    return null;
}
