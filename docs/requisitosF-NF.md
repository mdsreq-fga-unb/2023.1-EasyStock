## Histórico de Revisão

| Data       | Versão | Descrição            | Autor(es) |
| ---------- | ------ | -------------------- | ------------------------------------------------------------ |
|01/05/2023 | 0.1 | Criação e estruturação do documentação dos Requisitos Funcionais e Não-Funcionais | Hemanoel,Gustavo,Isaac |
|08/05/2023 | 0.2 | Atualizando requisitos funcionais  | Hemanoel,Gustavo,Isaac,Milena,Daniela|
|10/05/2023 | 0.3 | Atualizando requisitos funcionais e adicionando a Tabela de Critérios  | Gustavo, Daniela, Hemanoel, Isaac |
|10/05/2023 | 0.4 | Atualizando requisitos funcionais e a Tabela de Critérios  | Gustavo, Milena, Hemanoel, Isaac |
|15/05/2023 | 0.5 | Atualização do Backlog | Gustavo, Hemanoel, Isaac |

## Personas
* <b>Gerente:</b> Indivíduo que exerce o gerenciamento dos setores do produto, seja acerca das informações dos produtos até os relatórios de vendas.
* <b>Funcionário:</b> Indivíduo que utiliza do sistema de frente de caixa.
* <b>Usuário:</b> Generalização de Gerente e Funcionário.

## Requisitos Funcionais

| Tema           | Épico | User Stories |
| -------------- | ----------------------------------------------------- |-----|
|<b>[TM01]</b> Gerenciamento de produtos|<b>[EP01]</b> Consulta de informações sobre produtos |<b>[US01]</b> Eu, como usuário, quero poder consultar o preço do produto, para verificar o valor antes da compra.<br><b>[US02]</b> Eu, como usuário, quero consultar o nível de estoque dos produtos, para saber a disponibilidade do produto.|
|<b>[TM01]</b> Gerenciamento de produtos|<b>[EP02]</b> Adicionar ou remover produtos |<b>[US03]</b> Eu, como gerente, quero ser capaz de adicionar um novo produto ao catálogo, para atualizar o estoque.<br><b>[US04]</b> Eu, como gerente, quero ser capaz de remover um produto do catálogo, para atualizar o estoque.<br><b>[US05] </b>Eu, como gerente, gostaria de adicionar promoções, para estimular as vendas.|
|<b>[TM01]</b> Gerenciamento de produtos|<b>[EP03]</b> Controle de estoque |<b>[US06]</b> Eu, como gerente, quero ser capaz de visualizar o histórico de alterações no estoque de um produto, para acompanhar as transações.<br><b>[US07]</b>  Eu, como gerente, gostaria do sistema gerar um alerta de estoque baixo, para poder repor o produto.<br><b>[US08] </b> Eu, como gerente, gostaria de impedir a venda de uma quantidade de produtos acima do que existe no estoque, para evitar vendas que não possam ser efetuadas. <br><b>[US09] </b> Eu, como gerente, quero ser capaz de visualizar o estoque total da loja em tempo real, para ter uma visão atualizada sobre os produtos.|
|<b>[TM02]</b> Gerenciamento de vendas|<b>[EP04]</b> Frente de Caixa |<b>[US10]</b> Eu, como funcionário, quero ser capaz de adicionar um carrinho que contenha um pedido de venda, para efetuar a compra.<br><b>[US11]</b> Eu, como funcionário, quero adicionar ao carrinho do pedido em aberto, diferentes produtos, utilizando código reservado a cada produto, para adicionar os itens corretos.<br><b>[US12]</b> Eu, como funcionário, quero que no pedido em aberto seja realizado os cálculos da compra, para mostrar o valor total da venda.<br><b>[US13]</b> Eu, como funcionário, quero que no pedido seja realizado um fechamento da venda, para garantir a precisão da transacão.<br><b>[US14]</b> Eu, como funcionário, quero ser capaz de escolher a forma de pagamento que foi realizada, para registrar a transação corretamente.<br><b>[US15]</b> Eu, como funcionário, quero ser capaz de escolher qual o tipo da entrega do pedido, para monitorar o desempenho dos canais de vendas.<br><b>[US16]</b> Eu, como usuário, quero ser capaz de cadastrar clientes no sistema, para que possa acompanhar seu histórico de compra.<br><b>[US17]</b> Eu, como usuário, quero ser capaz de gerar uma lista de todos devedores, para acompanhar as pendências de pagamento. |
|<b>[TM02]</b> Gerenciamento de vendas|<b>[EP05]</b> Geração de relatórios de vendas | <b>[US18]</b> Eu, como gerente, quero ser capaz de gerar um gráfico de linhas, para monitorar melhor o fluxo de vendas de produtos específicos e identificar tendências e padrões.<br><b>[US19]</b> Eu, como gerente, quero ser capaz de gerar um gráfico de pizza, para identificar a participação de cada categoria nas vendas totais.<br><b>[US20]</b> Eu, como gerente, quero ser capaz de gerar um gráfico de barras, para comparar as vendas de diferentes produtos.<br><b>[US21]</b> Eu, como gerente, quero ter um dashboard, para monitorar o desempenho das vendas e a situação financeira da loja.<br><b>[US22]</b> Eu, como gerente, quero ser capaz de gerar relatórios de vendas por horário, para identificar os horários de pico de vendas.<br><b>[US23]</b> Eu, como gerente, quero ser capaz de gerar relatórios comparando a venda entre diferentes métodos, para identificar a eficácia de cada um.<br><b>[US24]</b> Eu, como gerente, quero ser capaz de gerar uma lista com todas as vendas já realizadas, para manter registro completo.<br><b>[US25]</b> Eu, como gerente, quero ser capaz de gerar esses relatórios de vendas por período, para monitorar o desempenho.<br><b>[US26]</b> Eu, como gerente, quero ser capaz de gerar relatórios de vendas por promoção, para identificar as promoções que têm melhor desempenho.<br>|
|<b>[TM03]</b> Gerenciamento de funcionários|<b>[EP06]</b> Registro de funcionários|<b>[US27]</b> Eu, como gerente, quero ser capaz de adicionar um novo funcionário ao sistema, para manter o registro atual dos funcionários.<br><b>[US28]</b> Eu, como gerente, quero ser capaz de remover um funcionário do sistema, para manter a integridade do sistema.<br><b>[US29]</b> Eu, como gerente, quero ser capaz de editar as informações de um funcionário existente, para atualizar com novas informações.<br><b>[US30]</b> Eu, como gerente, quero ser capaz de visualizar as informações pessoais dos funcionários, para manter o registro atualizado.<br>|

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
| <b>[US06]</b>| Eu, como gerente, quero ser capaz de visualizar o histórico de alterações no estoque de um produto, para acompanhar as transações. | 3 | 2 | 1 | 6 |
| <b>[US07]</b>| Eu, como gerente, gostaria do sistema gerar um alerta de estoque baixo, para poder repor o produto. | 1 | 3 | 3 | 7 |
| <b>[US08]</b>| Eu, como gerente, gostaria de impedir a venda de uma quantidade de produtos acima do que existe no estoque, para evitar vendas que não possam ser efetuadas. | 3 | 3 | 3 | 9 |
| <b>[US09]</b>| Eu, como gerente, quero ser capaz de visualizar o estoque total da loja em tempo real, para ter uma visão atualizada sobre os produtos. | 3 | 3 | 2 | 8 |
| <b>[US10]</b>| Eu, como funcionário, quero ser capaz de adicionar um carrinho que contenha um pedido de venda, para efetuar a compra. | 3 | 2 | 2 | 7 |
| <b>[US11]</b>| Eu, como funcionário, quero adicionar ao carrinho do pedido em aberto, diferentes produtos, utilizando código reservado a cada produto, para adicionar os itens corretos. | 3 | 2 | 1 | 6 |
| <b>[US12]</b>| Eu, como funcionário, quero que no pedido em aberto seja realizado os cálculos da compra, para mostrar o valor total da venda. | 2 | 3 | 3 | 8 |
| <b>[US13]</b>| Eu, como funcionário, quero que no pedido seja realizado um fechamento da venda, para garantir a precisão da transacão. | 2 | 3 | 2 | 7 |
| <b>[US14]</b>| Eu, como funcionário, quero ser capaz de escolher a forma de pagamento que foi realizada, para registrar a transação corretamente. | 2 | 3 | 2 | 7 |
| <b>[US15]</b>| Eu, como funcionário, quero ser capaz de escolher qual o tipo da entrega do pedido, para monitorar o desempenho dos canais de vendas. | 3 | 3 | 2 | 8 | 
| <b>[US16]</b>| Eu, como usuário, quero ser capaz de cadastrar clientes no sistema, para que possa acompanhar seu histórico de compra. | 2 | 2 | 3 | 7 |
| <b>[US17]</b>| Eu, como usuário, quero ser capaz de gerar uma lista de todos devedores, para acompanhar as pendências de pagamento. | 3 | 2 | 3 | 8 |
| <b>[US18]</b>| Eu, como gerente, quero ser capaz de gerar um gráfico de linhas, para monitorar melhor o fluxo de vendas de produtos específicos e identificar tendências e padrões. | 2 | 2 | 2 | 6 |
| <b>[US19]</b>| Eu, como gerente, quero ser capaz de gerar um gráfico de pizza, para identificar a participação de cada categoria nas vendas totais. | 2 | 2 | 2 | 6 |
| <b>[US20]</b>| Eu, como gerente, quero ser capaz de gerar um gráfico de barras, para comparar as vendas de diferentes produtos. | 2 | 2 | 2 | 6 |
| <b>[US21]</b>| Eu, como gerente, quero ter um dashboard, para monitorar o desempenho das vendas e a situação financeira da loja. | 2 | 2 | 2 | 6 |
| <b>[US22]</b>| Eu, como gerente, quero ser capaz de gerar relatórios de vendas por horário, para identificar os horários de pico de vendas. | 2 | 2 | 2 | 6 |
| <b>[US23]</b>| Eu, como gerente, quero ser capaz de gerar relatórios comparando a venda entre diferentes métodos, para identificar a eficácia de cada um. | 2 | 2 | 2 | 6 |
| <b>[US24]</b>| Eu, como gerente, quero ser capaz de gerar uma lista com todas as vendas já realizadas, para manter registro completo.| 3 | 3 | 3 | 9 |
| <b>[US25]</b>| Eu, como gerente, quero ser capaz de gerar esses relatórios de vendas por período, para monitorar o desempenho. | 2 | 2 | 3 | 7 |
| <b>[US26]</b>| Eu, como gerente, quero ser capaz de gerar relatórios de vendas por promoção, para identificar as promoções que têm melhor desempenho. | 2 | 2 | 3 | 7 |
| <b>[US27]</b>| Eu, como gerente, quero ser capaz de adicionar um novo funcionário ao sistema, para manter o registro atual dos funcionários. | 1 | 2 | 3 | 6 |
| <b>[US28]</b>| Eu, como gerente, quero ser capaz de remover um funcionário do sistema, para manter a integridade do sistema. | 1 | 2 | 3 | 6 |
| <b>[US29]</b>| Eu, como gerente, quero ser capaz de editar as informações de um funcionário existente, para atualizar com novas informações. | 1 | 2 | 3 | 6 |
| <b>[US30]</b>| Eu, como gerente, quero ser capaz de visualizar as informações pessoais dos funcionários, para manter o registro atualizado. | 1 | 2 | 3 | 6 | -->

## Tabela de Critérios

| ID | Declaração | Valor de Negócio | Viabilidade | Complexidade Técnica | Total |
| -----------|------------------------------------- | --------- | --------- | ---------| ---------|
| <b>[US01]</b>| Eu, como usuário, quero poder consultar o preço do produto, para verificar o valor antes da compra. | 3 | 3 | 3 | 9 |
| <b>[US02]</b>| Eu, como usuário, quero consultar o nível de estoque dos produtos, para saber a disponibilidade do produto. | 3 | 3 | 3 | 9 |
| <b>[US08]</b>| Eu, como gerente, gostaria de impedir a venda de uma quantidade de produtos acima do que existe no estoque, para evitar vendas que não possam ser efetuadas. | 3 | 3 | 3 | 9 |
| <b>[US24]</b>| Eu, como gerente, quero ser capaz de gerar uma lista com todas as vendas já realizadas, para manter registro completo.| 3 | 3 | 3 | 9 |
| <b>[US03]</b>| Eu, como gerente, quero ser capaz de adicionar um novo produto ao catálogo, para atualizar o estoque. | 3 | 3 | 2 | 8 |
| <b>[US04]</b>| Eu, como gerente, quero ser capaz de remover um produto do catálogo, para atualizar o estoque. | 3 | 3 | 2 | 8 |
| <b>[US09]</b>| Eu, como gerente, quero ser capaz de visualizar o estoque total da loja em tempo real, para ter uma visão atualizada sobre os produtos. | 3 | 3 | 2 | 8 |
| <b>[US12]</b>| Eu, como funcionário, quero que no pedido em aberto seja realizado os cálculos da compra, para mostrar o valor total da venda. | 2 | 3 | 3 | 8 |
| <b>[US15]</b>| Eu, como funcionário, quero ser capaz de escolher qual o tipo da entrega do pedido, para monitorar o desempenho dos canais de vendas. | 3 | 3 | 2 | 8 | 
| <b>[US17]</b>| Eu, como usuário, quero ser capaz de gerar uma lista de todos devedores, para acompanhar as pendências de pagamento. | 3 | 2 | 3 | 8 |
| <b>[US07]</b>| Eu, como gerente, gostaria do sistema gerar um alerta de estoque baixo, para poder repor o produto. | 1 | 3 | 3 | 7 |
| <b>[US10]</b>| Eu, como funcionário, quero ser capaz de adicionar um carrinho que contenha um pedido de venda, para efetuar a compra. | 3 | 2 | 2 | 7 |
| <b>[US13]</b>| Eu, como funcionário, quero que no pedido seja realizado um fechamento da venda, para garantir a precisão da transacão. | 2 | 3 | 2 | 7 |
| <b>[US14]</b>| Eu, como funcionário, quero ser capaz de escolher a forma de pagamento que foi realizada, para registrar a transação corretamente. | 2 | 3 | 2 | 7 |
| <b>[US16]</b>| Eu, como usuário, quero ser capaz de cadastrar clientes no sistema, para que possa acompanhar seu histórico de compra. | 2 | 2 | 3 | 7 |
| <b>[US25]</b>| Eu, como gerente, quero ser capaz de gerar esses relatórios de vendas por período, para monitorar o desempenho. | 2 | 2 | 3 | 7 |
| <b>[US26]</b>| Eu, como gerente, quero ser capaz de gerar relatórios de vendas por promoção, para identificar as promoções que têm melhor desempenho. | 2 | 2 | 3 | 7 |
| <b>[US06]</b>| Eu, como gerente, quero ser capaz de visualizar o histórico de alterações no estoque de um produto, para acompanhar as transações. | 3 | 2 | 1 | 6 |
| <b>[US11]</b>| Eu, como funcionário, quero adicionar ao carrinho do pedido em aberto, diferentes produtos, utilizando código reservado a cada produto, para adicionar os itens corretos. | 3 | 2 | 1 | 6 |
| <b>[US18]</b>| Eu, como gerente, quero ser capaz de gerar um gráfico de linhas, para monitorar melhor o fluxo de vendas de produtos específicos e identificar tendências e padrões. | 2 | 2 | 2 | 6 |
| <b>[US19]</b>| Eu, como gerente, quero ser capaz de gerar um gráfico de pizza, para identificar a participação de cada categoria nas vendas totais. | 2 | 2 | 2 | 6 |
| <b>[US20]</b>| Eu, como gerente, quero ser capaz de gerar um gráfico de barras, para comparar as vendas de diferentes produtos. | 2 | 2 | 2 | 6 |
| <b>[US21]</b>| Eu, como gerente, quero ter um dashboard, para monitorar o desempenho das vendas e a situação financeira da loja. | 2 | 2 | 2 | 6 |
| <b>[US22]</b>| Eu, como gerente, quero ser capaz de gerar relatórios de vendas por horário, para identificar os horários de pico de vendas. | 2 | 2 | 2 | 6 |
| <b>[US23]</b>| Eu, como gerente, quero ser capaz de gerar relatórios comparando a venda entre diferentes métodos, para identificar a eficácia de cada um. | 2 | 2 | 2 | 6 |
| <b>[US27]</b>| Eu, como gerente, quero ser capaz de adicionar um novo funcionário ao sistema, para manter o registro atual dos funcionários. | 1 | 2 | 3 | 6 |
| <b>[US28]</b>| Eu, como gerente, quero ser capaz de remover um funcionário do sistema, para manter a integridade do sistema. | 1 | 2 | 3 | 6 |
| <b>[US29]</b>| Eu, como gerente, quero ser capaz de editar as informações de um funcionário existente, para atualizar com novas informações. | 1 | 2 | 3 | 6 |
| <b>[US30]</b>| Eu, como gerente, quero ser capaz de visualizar as informações pessoais dos funcionários, para manter o registro atualizado. | 1 | 2 | 3 | 6 | 
| <b>[US05]</b>| Eu, como gerente, gostaria de adicionar promoções, para estimular as vendas. | 1 | 2 | 2 | 5 |



