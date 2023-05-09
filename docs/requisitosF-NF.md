## Histórico de Revisão

| Data       | Versão | Descrição            | Autor(es)                                                   |
| ---------- | ------ | -------------------- | ------------------------------------------------------------ |
|08/05/2023 | 0.2 | Atualizando requisitos funcionais  | Hemanoel,Gustavo,Isaac,Milena,Daniela|
|01/05/2023 | 0.1 | Criação e estruturação do documentação dos Requisitos Funcionais e Não-Funcionais | Hemanoel,Gustavo,Isaac |

## Personas
* <b>Gerente:</b> Indivíduo que exerce o gerenciamento dos setores do produto, seja acerca das informações dos produtos até os relatórios de vendas.
* <b>Funcionário:</b> Indivíduo que utiliza do sistema de frente de caixa.
* <b>Usuário:</b> Generalização de Gerente e Funcionário.

## Requisitos Funcionais

| Tema           | Épico | User Stories |
| -------------- | ----------------------------------------------------- |-----|
|<b>[TM01]</b> Gerenciamento de produtos|<b>[EP01]</b> Consulta de informações sobre produtos |<b>[US01]</b> Eu, como usuário, quero poder consultar o preço do produto.<br><b>[US02]</b> Eu, como usuário, quero poder consultar o nível de estoque dos produtos.<br><b>[US03] </b>Eu, como gerente, quero poder adicionar descrição de produtos.<br><b>[US04]</b> Eu, como gerente, quero poder remover descrição de produtos.|
|<b>[TM01]</b> Gerenciamento de produtos|<b>[EP02]</b> Adicionar ou remover produtos |<b>[US05]</b> Eu, como gerente, quero ser capaz de adicionar um novo produto ao catálogo.<br><b>[US06]</b> Eu, como gerente, quero ser capaz de remover um produto do catálogo.<br><b>[US07] </b> Eu, como funcionário, quero ser capaz de adicionar produtos através dos códigos de barra para agilizar o processo de atualização do produto.<br><b>[US08] </b>  Eu, como gerente, gostaria de criar promoções, para estimular as vendas.|
|<b>[TM01]</b> Gerenciamento de produtos|<b>[EP01]</b> Controle de estoque |<b>[US09]</b>  Eu, como gerente, quero ser capaz de ver o histórico de alterações no estoque de um produto.<br><b>[US10]</b>  Eu, como gerente, gostaria do sistema gerar um alerta de estoque baixo, para poder repor o produto.<br><b>[US11] </b> Eu, como gerente, gostaria de receber uma notificação para evitar a venda de produtos acima do que existe no estoque.<br><b>[US12] </b> Eu, como gerente, quero ser capaz de visualizar o estoque total da loja em tempo real.|
|<b>[TM02]</b> Gerenciamento de vendas|<b>[EP04]</b> Frente de Caixa |<b>[US13]</b> Eu, como funcionário quero ser capaz de criar um  carrinho que contem um pedido de venda que retire o produto automaticamente do estoque.<br><b>[US14]</b> Eu, como funcionário quero adicionar ao carrinho  do pedido em aberto ,diferentes produtos, utilizando código reservado a cada produto.<br><b>[US15]</b> Eu, como funcionário quero que o carrinho do pedido em aberto some o total de valor de  produtos e mostre o valor total da venda.<br><b>[US16]</b> Eu, como funcionário quero que o carrinho tenha um fechamento de venda, e que nele indique o troco a receber.<br><b>[US17]</b> Eu, como funcionário quero ser capaz de escolher a forma de pagamento que foi realizada.<br><b>[US18]</b> Eu, como funcionário quero ser capaz de escolher como foi realizado o pedido (delivery,aplicativo,presencial...).<br><b>[US19]</b> Eu, como funcionário, quero ser capaz de  registrar a venda através dos códigos de barra.|
|<b>[TM02]</b> Gerenciamento de vendas|<b>[EP05]</b> Geração de relatórios de vendas | <b>[US20]</b> Eu, como gerente, quero ser capaz de gerar um gráfico de linhas, para observar melhor o fluxo de vendas de produtos específicos e identificar tendências e padrões.<br><b>[US21]</b> Eu, como gerente, quero ser capaz de gerar um gráfico de pizza, para identificar a participação de cada categoria nas vendas totais.<br><b>[US22]</b> Eu, como gerente, quero ser capaz de gerar um gráfico de barras, para comparar as vendas de diferentes produtos.<br><b>[US23]</b> Eu, como gerente, quero ter um dashboard para acompanhar o desempenho das vendas e a situação financeira da minha loja.<br><b>[US24]</b> Eu, como gerente, quero ser capaz de gerar relatórios de vendas por horário para identificar os horários de pico de vendas.<br><b>[US25]</b> Eu, como gerente, quero ser capaz de gerar relatórios comparando a venda entre diferentes métodos como aplicativos(ifood,uber eats), presencial, delivery(telefone) e etc... para identificar a eficácia de cada método.<br><b>[US26]</b> Eu, como gerente, quero ser capaz de gerar uma lista com todas as vendas já realizadas.<br><b>[US27]</b> Eu, como gerente, quero ser capaz de gerar esses relatórios de vendas por período, para monitorar o desempenho.<br><b>[US28]</b> Eu, como gerente, quero ser capaz de gerar relatórios de vendas por promoção para identificar as promoções que têm melhor desempenho.<br>|
|<b>[TM03]</b> Gerenciamento de vendas|<b>[EP06]</b> Registro de funcionários|<b>[US29]</b> Eu, como gerente, quero ser capaz de adicionar um novo funcionário ao sistema.<br><b>[US30]</b> Eu, como gerente, quero ser capaz de remover um funcionário do sistema.<br><b>[US31]</b> Eu, como gerente, quero ser capaz de editar as informações de um funcionário existente.<br><b>[US32]</b> Eu, como gerente, quero ser capaz de visualizar as informações pessoais dos funcionários, como nome, número de telefone, endereço etc.<br>|

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

