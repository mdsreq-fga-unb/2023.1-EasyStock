import React, { useState } from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { PesquisaProduto, Tabela } from "../estoque/EstoqueStyled";
import { caixas } from "../../Datas";
import { CardCaixa } from "../../Card/Card";
import CaixaModal from "./CaixaModal";
import { PesquisaCaixa } from "./CaixaStyled";

export default function Caixa() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <NavBar />

            <PesquisaCaixa>
                <form>
                    <div>
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder="Código ou nome" />
                    </div>
                    <div>
                        <input
                            type="number"
                            name="qtd"
                            id="qtd"
                            placeholder="Quantidade"
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            name="Adicionar Produto"
                            id="adicionar"
                            className="buttons"
                            value={"Adicionar"}
                        />
                    </div>
                    <div className="valor">
                      <p>  VALOR: "0"</p>
                    </div>
                </form>
            </PesquisaCaixa>

            <Tabela>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Qtd</th>
                            <th>Nome</th>
                            <th>Preço unt</th>
                            <th>Preço ttl</th>
                        </tr>
                    </thead>
                    <tbody>
                        {caixas.map((caixa) => (
                            <CardCaixa key={caixa.itemP} caixa={caixa} />
                        ))}
                    </tbody>
                </table>
                <div>
                    <button onClick={() => setOpenModal(true)}>
                        Pagamento
                    </button>
                </div>

                <CaixaModal
                    isOpen={openModal}
                    onClose={() => setOpenModal(!openModal)}
                />
            </Tabela>
        </>
    );
}
