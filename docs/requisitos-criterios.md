## Histórico de Revisão

| Data       | Versão | Descrição            | Autor(es) |
| ---------- | ------ | -------------------- | ------------------------------------------------------------ |
|01/05/2023 | 0.1 | Criação e estruturação do documentação dos Requisitos Funcionais e Não-Funcionais | Hemanoel,Gustavo,Isaac |
|08/05/2023 | 0.2 | Atualizando requisitos funcionais  | Hemanoel,Gustavo,Isaac,Milena,Daniela|
|10/05/2023 | 0.3 | Atualizando requisitos funcionais e adicionando a Tabela de Critérios  | Gustavo, Daniela, Hemanoel, Isaac |
|10/05/2023 | 0.4 | Atualizando requisitos funcionais e a Tabela de Critérios  | Gustavo, Milena, Hemanoel, Isaac |
|15/05/2023 | 0.5 | Atualização do Backlog | Gustavo, Hemanoel, Isaac |
|16/05/2023 | 0.6 | Atualização do Backlog | Gustavo, Milena, Isaac, Hemanoel |

## Personas
* <b>Gerente:</b> Indivíduo que exerce o gerenciamento dos setores do produto, seja acerca das informações dos produtos até os relatórios de vendas.
* <b>Funcionário:</b> Indivíduo que utiliza do sistema de frente de caixa.
* <b>Usuário:</b> Generalização de Gerente e Funcionário.

## Requisitos Funcionais

| Tema           | Épico | User Stories |
| -------------- | ----------------------------------------------------- |-----|
|<b>[TM01]</b> Gerenciamento de produtos|<b>[EP01]</b> Consulta de informações sobre produtos |<b>[US01]</b> Eu, como usuário, quero poder consultar o preço do produto, para verificar o valor antes da compra.<br><b>[US02]</b> Eu, como usuário, quero consultar o nível de estoque dos produtos, para saber a disponibilidade do produto.|
|<b>[TM01]</b> Gerenciamento de produtos|<b>[EP02]</b> Adicionar ou remover produtos |<b>[US03]</b> Eu, como gerente, quero ser capaz de adicionar um novo produto ao catálogo, para atualizar o estoque.<br><b>[US04]</b> Eu, como gerente, quero ser capaz de remover um produto do catálogo, para atualizar o estoque.<br><b>[US05] </b> Eu, como gerente, gostaria de adicionar promoções, para estimular as vendas.|
|<b>[TM01]</b> Gerenciamento de produtos|<b>[EP03]</b> Controle de estoque |<b>[US06]</b> Eu, como gerente, quero ser capaz de reduzir a quantidade do estoque a cada venda realizada, para manter o estoque atualizado.<br><b>[US07]</b> Eu, como gerente, gostaria do sistema gerar um alerta de estoque baixo, para poder repor o produto.<br><b>[US08] </b> Eu, como gerente, quero ser capaz de visualizar o estoque total da loja em tempo real, para ter uma visão atualizada sobre os produtos.|
|<b>[TM02]</b> Frente de Caixa|<b>[EP04]</b> Devedores |<b>[US09]</b> Eu, como usuário, quero ser capaz de cadastrar clientes devedores no sistema, para acompanhar as pendências de pagamento.<br><b>[US10]</b> Eu, como usuário, quero ser capaz de alterar a dívida de um cliente existente, para atualizar as pendências.|
|<b>[TM02]</b> Frente de Caixa|<b>[EP05]</b> Adicionar venda |<b>[US11]</b> Eu, como funcionário, quero ser capaz de adicionar um pedido de venda, para efetuar a compra.<br><b>[US12]</b> Eu, como funcionário, quero adicionar ao pedido em aberto, diferentes produtos, utilizando código reservado a cada produto, para adicionar os itens corretos.<br>|
|<b>[TM02]</b> Frente de Caixa|<b>[EP06]</b> Finalizar compra  |<b>[US13]</b> Eu, como funcionário, quero ser capaz de escolher a forma de pagamento que foi realizada, para registrar a transação corretamente.<br><b>[US14]</b> Eu, como funcionário, quero ser capaz de escolher qual o tipo da entrega do pedido, para ser identificado o tipo da entrega.<br><b>[US15]</b> Eu, como funcionário, quero que o valor recebido em dinheiro seja exibido, para que apareça o troco.<br>|
|<b>[TM03]</b> Gerenciamento de vendas|<b>[EP07]</b> Dashboard | <b>[US16]</b> Eu, como gerente, quero ser capaz de gerar um gráfico de linhas, para monitorar melhor o fluxo de vendas de produtos específicos e identificar tendências e padrões.<br><b>[US17]</b> Eu, como gerente, quero ser capaz de gerar um gráfico de pizza, para identificar a participação de cada categoria nas vendas totais.<br><b>[US18]</b> Eu, como gerente, quero ser capaz de gerar um gráfico de barras, para comparar as vendas de diferentes produtos.|
|<b>[TM03]</b> Gerenciamento de vendas|<b>[EP08]</b> Geração de relatórios de vendas |<b>[US19]</b> Eu, como gerente, quero ser capaz de gerar relatórios, para identificar o desempenho das vendas.<br><b>[US20]</b> Eu, como gerente, quero ser capaz de gerar uma lista com todas as vendas já realizadas, para manter registro completo.|
|<b>[TM04]</b> Gerenciamento de funcionários|<b>[EP09]</b> Registro de funcionários|<b>[US21]</b> Eu, como gerente, quero ser capaz de adicionar um novo funcionário ao sistema, para manter o registro atual dos funcionários.<br><b>[US22]</b> Eu, como gerente, quero ser capaz de remover um funcionário do sistema, para manter a integridade do sistema.<br><b>[US23]</b> Eu, como gerente, quero ser capaz de editar as informações de um funcionário existente, para atualizar com novas informações.<br><b>[US24]</b> Eu, como gerente, quero ser capaz de visualizar as informações pessoais dos funcionários, para manter o registro atualizado.<br>|

## Requisitos não-Funcionais

| Tipo      | Requisito |
| -------------- | ------------|
|Usabilidade|Deve ter uma interface intuitiva, fácil e consistente, sendo organizada de maneira lógica, para reduzir a curva de aprendizado do usuário.|
|Confiabilidade|O software deve ser capaz de lidar com erros ou falhas, sempre operacional para atender às necessidades do usuário, evitar perda de venda e manter um grau de segurança.|
|Desempenho|O desempenho basicamente será medido em tempo de resposta e tempo de processamento sendo o primeiro quão rápido o sistema é responsivo em relação as ações do usuário, e o segundo seria o quão eficiente o sistema é capaz em realizar uma tarefa.|
|Suportabilidade|O site deve ser funcional nas versões atuais dos navegadores. (Chrome, Edge, Opera e Firefox)|
|Requisitos de implementação|O Front-End será construído em ReactJS, o Back-End em NodeJS e com testes no GitActions.|
|Requisitos de interface|Deve ser compatível com diferentes dispositivos hardware, como impressoras, leitores de código de barras.|
|Requisitos físicos|Deve ser suportado pelo desktop do cliente.|
|Restrições de Design|Deve ser desenvolvido um software seguindo práticas de design e arquitetura.|

<!-- ## Tabela de Critérios

| ID | Declaração | Valor de Negócio | Viabilidade | Complexidade Técnica | Total |
| -----------|------------------------------------- | --------- | --------- | ---------| ---------|
| <b>[US01]</b>| Eu, como usuário, quero poder consultar o preço do produto, para verificar o valor antes da compra. | 3 | 3 | 3 | 9 |
| <b>[US02]</b>| Eu, como usuário, quero consultar o nível de estoque dos produtos, para saber a disponibilidade do produto. | 3 | 3 | 3 | 9 |
| <b>[US03]</b>| Eu, como gerente, quero ser capaz de adicionar um novo produto ao catálogo, para atualizar o estoque. | 3 | 3 | 2 | 8 |
| <b>[US04]</b>| Eu, como gerente, quero ser capaz de remover um produto do catálogo, para atualizar o estoque. | 3 | 3 | 2 | 8 |
| <b>[US05]</b>| Eu, como gerente, gostaria de adicionar promoções, para estimular as vendas. | 1 | 2 | 2 | 5 |
| <b>[US06]</b>| Eu, como gerente, quero ser capaz de reduzir a quantidade do estoque a cada venda realizada, para manter o estoque atualizado. | 3 | 2 | 1 | 6 |
| <b>[US07]</b>| Eu, como gerente, gostaria do sistema gerar um alerta de estoque baixo, para poder repor o produto. | 1 | 3 | 3 | 7 |
| <b>[US08]</b>| Eu, como gerente, quero ser capaz de visualizar o estoque total da loja em tempo real, para ter uma visão atualizada sobre os produtos. | 3 | 3 | 3 | 9 |
| <b>[US09]</b>| Eu, como usuário, quero ser capaz de cadastrar clientes devedores no sistema, para acompanhar as pendências de pagamento.| 3 | 3 | 2 | 8 |
| <b>[US10]</b>| Eu, como usuário, quero ser capaz de alterar a dívida de um cliente existente, para atualizar as pendências. | 3 | 2 | 2 | 7 |
| <b>[US11]</b>| Eu, como funcionário, quero ser capaz de adicionar um pedido de venda, para efetuar a compra. | 3 | 2 | 1 | 6 |
| <b>[US12]</b>| Eu, como funcionário, quero adicionar ao pedido em aberto, diferentes produtos, utilizando código reservado a cada produto, para adicionar os itens corretos. | 2 | 3 | 3 | 8 |
| <b>[US13]</b>| Eu, como funcionário, quero ser capaz de escolher a forma de pagamento que foi realizada, para registrar a transação corretamente. | 2 | 3 | 2 | 7 |
| <b>[US14]</b>| Eu, como funcionário, quero ser capaz de escolher qual o tipo da entrega do pedido, para ser identificado o tipo da entrega. | 3 | 3 | 2 | 8 | 
| <b>[US15]</b>| Eu, como funcionário, quero que o valor recebido em dinheiro seja exibido, para que apareça o troco. | 2 | 2 | 3 | 7 |
| <b>[US16]</b>| Eu, como gerente, quero ser capaz de gerar um gráfico de linhas, para monitorar melhor o fluxo de vendas de produtos específicos e identificar tendências e padrões. | 3 | 2 | 3 | 8 |
| <b>[US17]</b>| Eu, como gerente, quero ser capaz de gerar um gráfico de pizza, para identificar a participação de cada categoria nas vendas totais. | 2 | 2 | 2 | 6 |
| <b>[US18]</b>| Eu, como gerente, quero ser capaz de gerar um gráfico de barras, para comparar as vendas de diferentes produtos. | 2 | 2 | 2 | 6 |
| <b>[US19]</b>| Eu, como gerente, quero ser capaz de gerar relatórios, para identificar o desempenho das vendas. | 2 | 2 | 2 | 6 |
| <b>[US20]</b>| Eu, como gerente, quero ser capaz de gerar uma lista com todas as vendas já realizadas, para manter registro completo. | 2 | 2 | 2 | 6 |
| <b>[US21]</b>| Eu, como gerente, quero ser capaz de adicionar um novo funcionário ao sistema, para manter o registro atual dos funcionários. | 2 | 2 | 2 | 6 |
| <b>[US22]</b>| Eu, como gerente, quero ser capaz de remover um funcionário do sistema, para manter a integridade do sistema.| 2 | 2 | 2 | 6 |
| <b>[US23]</b>| Eu, como gerente, quero ser capaz de editar as informações de um funcionário existente, para atualizar com novas informações.| 2 | 2 | 2 | 6 | 
| <b>[US24]</b>| Eu, como gerente, quero ser capaz de visualizar as informações pessoais dos funcionários, para manter o registro atualizado. | 2 | 3 | 2 | 7 | -->

## Tabela de Critérios

| ID | Declaração | Valor de Negócio | Viabilidade | Complexidade Técnica | Total |
| -----------|------------------------------------- | --------- | --------- | ---------| ---------|
| <b>[US01]</b>| Eu, como usuário, quero poder consultar o preço do produto, para verificar o valor antes da compra. | 3 | 3 | 3 | 9 |
| <b>[US02]</b>| Eu, como usuário, quero consultar o nível de estoque dos produtos, para saber a disponibilidade do produto. | 3 | 3 | 3 | 9 |
| <b>[US08]</b>| Eu, como gerente, quero ser capaz de visualizar o estoque total da loja em tempo real, para ter uma visão atualizada sobre os produtos. | 3 | 3 | 3 | 9 |
| <b>[US03]</b>| Eu, como gerente, quero ser capaz de adicionar um novo produto ao catálogo, para atualizar o estoque. | 3 | 3 | 2 | 8 |
| <b>[US04]</b>| Eu, como gerente, quero ser capaz de remover um produto do catálogo, para atualizá-lo. | 3 | 3 | 2 | 8 |
| <b>[US06]</b>| Eu, como gerente, quero ser capaz de reduzir a quantidade do estoque a cada venda realizada, para manter o estoque atualizado. | 3 | 3 | 2 | 8 |
| <b>[US09]</b>| Eu, como usuário, quero ser capaz de cadastrar clientes devedores no sistema, para acompanhar as pendências de pagamento.| 3 | 3 | 2 | 8 |
| <b>[US10]</b>| Eu, como usuário, quero ser capaz de alterar a dívida de um cliente existente, para atualizar as pendências. | 3 | 3 | 2 | 8 |
| <b>[US12]</b>| Eu, como funcionário, quero adicionar ao pedido em aberto, diferentes produtos, utilizando código reservado a cada produto, para adicionar os itens corretos. | 2 | 3 | 3 | 8 |
| <b>[US14]</b>| Eu, como funcionário, quero ser capaz de escolher qual o tipo da entrega do pedido, para ser identificado o tipo da entrega. | 3 | 3 | 2 | 8 | 
| <b>[US11]</b>| Eu, como funcionário, quero ser capaz de adicionar um pedido de venda, para efetuar a compra. | 3 | 3 | 2 | 8 |
| <b>[US20]</b>| Eu, como gerente, quero ser capaz de gerar uma lista com todas as vendas já realizadas, para manter registro completo. | 3 | 3 | 2 | 8 |
| <b>[US07]</b>| Eu, como gerente, gostaria do sistema gerar um alerta de estoque baixo, para poder repor o produto. | 1 | 3 | 3 | 7 |
| <b>[US13]</b>| Eu, como funcionário, quero ser capaz de escolher a forma de pagamento que foi realizada, para registrar a transação corretamente. | 2 | 3 | 2 | 7 |
| <b>[US15]</b>| Eu, como funcionário, quero que o valor recebido em dinheiro seja exibido, para que apareça o troco. | 2 | 2 | 3 | 7 |
| <b>[US16]</b>| Eu, como gerente, quero ser capaz de gerar um gráfico de linhas, para monitorar melhor o fluxo de vendas de produtos específicos e identificar tendências e padrões. | 2 | 2 | 2 | 6 |
| <b>[US17]</b>| Eu, como gerente, quero ser capaz de gerar um gráfico de pizza, para identificar a participação de cada categoria nas vendas totais. | 2 | 2 | 2 | 6 |
| <b>[US18]</b>| Eu, como gerente, quero ser capaz de gerar um gráfico de barras, para comparar as vendas de diferentes produtos. | 2 | 2 | 2 | 6 |
| <b>[US19]</b>| Eu, como gerente, quero ser capaz de gerar relatórios, para identificar o desempenho das vendas. | 2 | 2 | 2 | 6 |
| <b>[US21]</b>| Eu, como gerente, quero ser capaz de adicionar um novo funcionário ao sistema, para manter o registro atual dos funcionários. | 2 | 2 | 2 | 6 |
| <b>[US22]</b>| Eu, como gerente, quero ser capaz de remover um funcionário do sistema, para manter a integridade do sistema.| 2 | 2 | 2 | 6 |
| <b>[US23]</b>| Eu, como gerente, quero ser capaz de editar as informações de um funcionário existente, para atualizar com novas informações.| 2 | 2 | 2 | 6 | 
| <b>[US24]</b>| Eu, como gerente, quero ser capaz de visualizar as informações pessoais dos funcionários, para manter o registro atualizado. | 1 | 3 | 2 | 6 |
| <b>[US05]</b>| Eu, como gerente, gostaria de adicionar promoções, para estimular as vendas. | 1 | 2 | 2 | 5 |

## Critérios de Aceitação

| ID | Critérios de Aceitação |
| -----------|------------------------------------- |
| <b>[US01]</b>| - O sistema deve ser capaz de exibir o preço de produtos atualizados.<br> - O preço deve ser exibido com o valor correto estabelecido.<br> - Deve ser exibido o nome e a imagem do produto, junto com sua descrição.|
| <b>[US02]</b>| - O sistema deve exibir o nível de estoque em tempo real.<br> - O nível do estoque deve estar atualizado e correto.<br> - O sistema deve permitir que o usuário visualize o nível de estoque de todos  os produtos. |
| <b>[US08]</b>| - O sistema deve permitir o gerente visualizar o estoque da loja em tempo real.<br> - O estoque total deve estar atualizado.|
| <b>[US03]</b>| - O sistema deve permitir que o gerente adicione um produto do catálogo. <br>- O sistema deve pedir ao gerente as informações para adicionar um novo produto nome, quantidade no estoque, descrição e preço. |
| <b>[US04]</b>| - O sistema deve permitir que o gerente remova um produto do catálogo. <br>- O sistema deve solicitar uma confirmação antes de remover um produto do catálogo.<br> - O sistema deve atualizar a quantidade do estoque ao remover um produto. |
| <b>[US06]</b>| - O sistema deve atualizar automaticamente a quantidade de estoque ao produto vendido.<br>- O sistema não deve permitir que a quantidade de estoque fique menor que zero. |
| <b>[US09]</b>| - O sistema deve ser capaz de exibir uma lista dos devedores.<br> - A lista de devedores deve conter informações: nome e valor total da dívida. |
| <b>[US10]</b>| - O sistema deve fornecer uma maneira de buscar de clientes. <br> - A lista de devedores deve ser atualizada ao confirmar pagamentos e pendências quando forem registradas no sistema. <br> - O sistema deve permitir alterar a dívida de um cliente. |
| <b>[US12]</b>| - Ao adicionar um produto, pode ser inserindo o código ou o nome do produto para conferir com o sistema. <br> - O sistema deve verificar se o código ou o nome inserido corresponde a um produto existente no catálogo.<br> - Se código não for reconhecido, o sistema deve exibir uma mensagem de erro indicando que é inválido.<br>- Se o código for válido, o sistema deve adicionar o produto ao pedido em aberto, registrando todas as informações relevantes,  nome, preço e quantidade.<br>- O funcionário deve poder adicionar vários produtos ao pedido em aberto, repetindo o processo. |
| <b>[US14]</b>| - O sistema de fornecer as seguintes opções de entrega foi realizada: Presencial, Delivery (iFood ou Retirada na loja). | 
| <b>[US20]</b>| - O sistema deve ser capaz de gerar uma lista com as vendas realizadas.<br>- A lista de vendas deve conter informações na qual serão registradas o nome do produto, quantidade vendida, valor total, data, horário de venda e o estoque disponível.<br>- O sistema deve ser capaz de gerar a lista em diferentes períodos de tempo: diária, semanal, quinzenal e mensal. |
| <b>[US11]</b>|- O sistema deve permitir que um funcionário adicione produtos no pedido.<br> - O sistema deve permitir que o usuário visualize os produtos no pedido mostrando o seu nome do produto, quantidade, preços individuais e valor total.  |
| <b>[US07]</b>| - O sistema deve monitorar o nível de estoque.<br>- O sistema deve notificar o estoque baixo caso um produto esteja abaixo do limite. <br> - O sistema deve permitir que o gerente altere o limite de estoque.|
| <b>[US13]</b>| - O sistema deve oferecer diferentes opções de pagamento: dinheiro, cartão de crédito, débito, PIX ou fiado. <br> - Ao selecionar a forma de pagamento desejada, o sistema deve registrar essa informação juntamente com os detalhes da venda. |