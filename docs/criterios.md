## Histórico de Revisão

| Data       | Versão | Descrição            | Autor(es) |
| ---------- | ------ | -------------------- | ------------------------------------------------------------ |
| 15/05/2023 | 0.1 | Criação e estruturação do documentação dos Critérios de Aceitação | Hemanoel,Gustavo,Isaac, Milena |

# Critérios de aceitação

### <b>[US01]</b> Eu, como usuário, quero poder consultar o preço do produto.
* O sistema deve ser capaz de exibir o preço de produtos atualizados.
* O preço deve ser exibido com o valor correto estabelecido.
* Deve ser exibido o nome e a imagem do produto, junto com sua descrição.

### <b>[US02]</b> Eu, como usuário, quero consultar o nível de estoque dos produtos.
* O sistema deve exibir o nível de estoque em tempo real.
* O nível do estoque deve estar atualizado e correto.
* O sistema deve permitir que o usuário visualize o nível de estoque de todos  os produtos.

### <b>[US08]</b> Eu, como gerente, gostaria de impedir a venda de uma quantidade de produtos acima do que existe no estoque.
* O sistema deve impedir que o funcionário efetue uma venda de um produto que não está disponível no estoque.
* O sistema ao perceber que o funcionário tentou efetuar uma venda indisponível exibirá uma mensagem de erro.

### <b>[US24]</b> Eu, como gerente, quero ser capaz de gerar uma lista com todas as vendas já realizadas.
* O sistema deve ser capaz de gerar uma lista com as vendas realizadas.
* A lista de vendas deve conter informações como nome do produto, quantidade vendida, valor total,data, horario de venda e o estoque disponível.
* O sistema deve ser capaz de gerar a lista em diferentes períodos de tempo (Diária, Semanal, Quinzenal, Mensal).

### <b>[US03]</b> Eu, como gerente, quero ser capaz de adicionar um novo produto ao catálogo.
* O sistema deve permitir que o gerente adicione um produto do catálogo.
* O sistema deve pedir ao gerente as informações para adicionar um novo produto como nome, quantidade no estoque, descrição e preço.

### <b>[US04]</b> Eu, como gerente, quero ser capaz de remover um produto do catálogo.
* O sistema deve permitir que o gerente remova um produto do catálogo.
* O sistema deve solicitar uma confirmação antes de remover um produto do catálogo.
* O sistema deve atualizar a quantidade do estoque ao remover um produto.

### <b>[US09]</b> Eu, como gerente, quero ser capaz de visualizar o estoque total.
* O sistema deve permitir o gerente visualizar o estoque da loja em tempo real. 
* O estoque total deve estar atualizado.

### <b>[US12]</b> Eu, como funcionário, quero que no pedido em aberto seja realizado os cálculos da compra.
* O sistema deve ser capaz de realizar os cálculos de compra de acordo com os produtos adicionados ao carrinho.
* O sistema deve ser capaz de mostrar o troco da compra realizada.

### <b>[US15]</b> Eu, como funcionário, quero ser capaz de escolher qual o tipo da entrega do pedido.
* O sistema de fornercer as seguintes opções de como a entrega foi realizada: Presencial, Delivery (iFood ou Entrega Pessoal).

### <b>[US17]</b> Eu, como usuário, quero ser capaz de gerar uma lista de todos devedores.
* O sistema deve ser capaz de gerar uma lista dos devedores.
* A lista de devedores deve conter informações como nome, valor total da divida e prazo de pagamento.
* A lista deve ser atualizada ao confirmar pagamentos e pendências quando forem registradas no sistema.

### <b>[US05]</b> Eu, como gerente, gostaria de adicionar promoções, para estimular as vendas.
* O sistema deve permitir ao gerente adicionar uma nova promoção.
* O sistema deve solicitar ao gerente informações para a adição de uma promoção como nome do produto, desconto e tempo que a promoção estará disponível.

### <b>[US07]</b> Eu, como gerente, gostaria do sistema gerar um alerta de estoque baixo.
* O sistema deve monitorar o nível de estoque.
* O sistema deve notificar o estoque baixo caso um produto esteja abaixo do limite.
* O sistema deve permitir que o gerente altere o limite de estoque.

### <b>[US10]</b> Eu, como funcionário, quero ser capaz de adicionar um carrinho que contenha um pedido de venda, para efetuar a compra.
* O sistema deve permitir que um funcionário adicione produtos no carrinho.
* O sistema deve permitir que o usuário visualize os produtos no carrinho como nome do produto, quantidade, preços individuais e valor total.
* O sistema deve finalizar o pedido de acordo com o pagamento selecionado.

### <b>[US13]</b> Eu, como funcionário, quero que no pedido seja realizado um fechamento da venda.
* O sistema deve finalizar o pedido.
* O sistema deve calcular o valor total de venda incluindo possíveis descontos e troco a ser pago.

### <b>[US14]</b> Eu, como funcionário, quero ser capaz de escolher a forma de pagamento que foi realizada, para registrar a transação corretamente.
* O sistema deve oferecer diferentes opções de pagamento, como dinheiro, cartão de crédito, débito e PIX.
* Ao selecionar a forma de pagamento desejada, o sistema deve registrar essa informação juntamente com os detalhes da venda.
