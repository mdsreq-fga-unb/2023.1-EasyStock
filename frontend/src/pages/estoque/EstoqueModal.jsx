import React from 'react';
import { TodoModal } from './EstoqueModalStyled';

export default function EstoqueModal({isOpen}) {
    
    if (isOpen) {
        return (
          <TodoModal>
            <div className='container'>
              <div className='card'>
                <h1>Adicionar Produtos</h1>
                <div className='label-float'>
                  <input type="text" id='nome' placeholder='Nome' required/>
                  <input type="text" id='precoCusto' placeholder='Preço custo' required/>
                  <input type="text" id='precoVenda' placeholder='Preço venda' required/>
                  <input type="text" id='qtdEstoque' placeholder='Quantidade' required/>
                  <input type="text" id='codigoPDV' placeholder='Código PDV' required/>
                </div>
                <div className='justify-center'>
                  <button className='button-modal'>Adicionar</button>
                </div>
              </div>

            </div>
          </TodoModal>
        )
        
    }
    return null;

}
