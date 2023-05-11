## Histórico de Revisão

| Data       | Versão | Descrição            | Autor(es) |
| ---------- | ------ | -------------------- | ------------------------------------------------------------ |
|11/05/2023 | 0.1 | Definição da Arquitetura do projeto | Gustavo |

## <b>Arquitetura</b>

### <b>Estrutura física: Monolítica</b> 
* É uma arquitetura tradicional, reconhecida por sua simplicidade. Com isso, o desenvolvimento da aplicação pode ser feito mais rapidamente. Achamos interessante para o nosso projeto (que é pequeno e não tem pretensão de ser um sistema complexo e de alta escalabilidade) o desenvolvimento em camadas e em uma mesma tecnologia para facilitar a coesão da equipe.

### <b>Estrutura lógica: Em camadas</b>
* Auxilia na organização do projeto, principalmente em caso de necessidade de alguma manutenção do código. (Frente de Caixa/Gerenciamento do Estoque --> Cálculos e Operações --> Banco de Dados)

## <b>Estilo</b>

### <b>MVC (Model-View-Controller)</b>
* Facilidade para a compreensão e manutenção da aplicação e a facilidade da criação de múltiplas interfaces do sistema sem alteração nas regras de negócio. Com o uso do estilo MVC a aplicação fica mais organizada, auxiliando na compreensão do código por parte de todos os desenvolvedores da equipe.