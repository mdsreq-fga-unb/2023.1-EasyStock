## Histórico de Revisão

| Data       | Versão | Descrição            | Autor(es) |
| ---------- | ------ | -------------------- | ------------------------------------------------------------ |
|16/05/2023 | 0.1 | Definição do Workflow de Integração Contínua | Daniela |

## Workflow Integração Contínua

| Etapa | Descrição |
|----------|-----------------------|
| Estruturação do ambiente | Os comandos/scripts são definidos no ambiente de testes visando atender aos requisitos do projetos |
| Disparador de evento | O workflow é acionado quando ocorre uma tentativa de push/pull request na branch principal por parte de algum desenvolvedor |
| Acessar código fonte | O código fonte do repositório é baixado no ambiente onde as etapas de teste serão executadas |
| Execução dos testes | Executam-se os testes em cima da base de comandos definidos previamente na etapa de estruturação do ambiente |
| Exibição de resultados | O resultado do teste é exibido no console |
| Feedback de resultados | O CI Tester repassa o feedback com o resultado dos testes para os outros desenvolvedores da equipe | 
| Tomada de decisão | Caso os testes sejam processados com sucesso, a solicitação de push/pull request é autorizada e ocorre a mesclagem com a branch principal. Caso os testes reportem erros, a solicitação de push/pull request fica em espera até que as correções sejam feitas pelos desenvolvedores |
