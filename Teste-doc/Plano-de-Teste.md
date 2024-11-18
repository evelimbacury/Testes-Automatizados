# Especificação dos Casos de Teste

## 1. Caracterização do Caso de Teste

**Descrição:**  
Cada caso de teste descreve uma situação ou funcionalidade específica do aplicativo que precisa ser verificada. É uma maneira de validar se o sistema está funcionando conforme esperado.

## CT-01: Testar o processo de criação, edição e desativação de contas

| **Campo**                    | **Descrição**                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------------|
| **Descrição**                | Testar o processo de criação, edição e desativação de contas, garantindo a aplicação correta das permissões de acesso. |
| **Entradas**                 | - Parâmetros necessários para a criação de uma conta. <br> - Parâmetros necessários para a edição de uma conta. <br> - Remoção de uma conta. |
| **Resultados Esperados**     | - Uma nova conta com os parâmetros anteriores foi adicionada. <br> - A conta alvo foi alterada com os parâmetros adicionados na edição. <br> - A conta alvo foi excluída. |
| **Critérios de Aprovação/Rejeição** | - **Aprovação:** Todos os dados foram aplicados corretamente, e as funções executadas corretamente. <br> - **Rejeição:** Dados incorretos foram adicionados ou de forma incorreta. A conta não foi removida. |
| **Recursos para o Caso de Teste** | - Ambiente de Teste: Site rooms com acesso ao Banco de Dados. <br> - Ferramentas: Locust, JMeter. |
| **Restrições de Uso**        | Os parâmetros corretos devem ser adicionados e seus respectivos tipos.                       |
| **Dependências**             | -                                                                                           |
| **Observações Adicionais**   | Documentar quaisquer anomalias ou comportamentos inesperados.                                |


## CT-02: Verificar a funcionalidade de cadastrar, alterar, consultar e excluir disciplinas

| **Campo**                    | **Descrição**                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------------|
| **Descrição**                | Verificar a funcionalidade de cadastrar, alterar, consultar e excluir disciplinas, confirmando que todas as informações são armazenadas corretamente. |
| **Entradas**                 | - Parâmetros necessários para cadastrar uma disciplina. <br> - Parâmetros necessários para a edição de disciplina. <br> - Consulta de uma disciplina. <br> - Remoção de uma disciplina. |
| **Resultados Esperados**     | - Uma nova disciplina com os parâmetros anteriores foi adicionada. <br> - A disciplina alvo foi alterada com os parâmetros adicionados na edição. <br> - A disciplina alvo foi consultada. <br> - A disciplina alvo foi excluída. |
| **Critérios de Aprovação/Rejeição** | - **Aprovação:** Todos os dados foram aplicados corretamente, e as funções executadas corretamente. <br> - **Rejeição:** Dados incorretos foram adicionados ou de forma incorreta. A disciplina não foi removida. |
| **Recursos para o Caso de Teste** | - Ambiente de Teste: Site rooms com acesso ao Banco de Dados. <br> - Ferramentas: Locust, JMeter. |
| **Restrições de Uso**        | Os parâmetros corretos devem ser adicionados e seus respectivos tipos.                       |
| **Dependências**             | -                                                                                           |
| **Observações Adicionais**   | Documentar quaisquer anomalias ou comportamentos inesperados.                                |


## CT-03: Verificar a funcionalidade de cadastrar, alterar, consultar e excluir docentes

| **Campo**                    | **Descrição**                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------------|
| **Descrição**                | Verificar a funcionalidade de cadastrar, alterar, consultar e excluir docentes, confirmando que todas as informações são armazenadas corretamente. |
| **Entradas**                 | - Parâmetros necessários para cadastrar um docente. <br> - Parâmetros necessários para a edição de docente. <br> - Consulta das informações de um docente. <br> - Remoção de um docente. |
| **Resultados Esperados**     | - Um novo docente com os parâmetros anteriores foi adicionado. <br> - O docente alvo foi alterado com os parâmetros adicionados na edição. <br> - O docente alvo foi consultado. <br> - O docente alvo foi excluído. |
| **Critérios de Aprovação/Rejeição** | - **Aprovação:** Todos os dados foram aplicados corretamente, e as funções executadas corretamente. <br> - **Rejeição:** Dados incorretos foram adicionados ou de forma incorreta. O docente não foi removido. |
| **Recursos para o Caso de Teste** | - Ambiente de Teste: Site rooms com acesso ao Banco de Dados. <br> - Ferramentas: Locust, JMeter. |
| **Restrições de Uso**        | Os parâmetros corretos devem ser adicionados e seus respectivos tipos.                       |
| **Dependências**             | -                                                                                           |
| **Observações Adicionais**   | Documentar quaisquer anomalias ou comportamentos inesperados.                                |


## CT-04: Testar o algoritmo de ensalamento

| **Campo**                    | **Descrição**                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------------|
| **Descrição**                | Validar o algoritmo de alocação de disciplinas nas salas, garantindo que a capacidade e os recursos das salas sejam respeitados. |
| **Entradas**                 | - Lista de disciplinas, sala disponível, número de alunos e recursos necessários.             |
| **Resultados Esperados**     | - As disciplinas devem ser alocadas corretamente às salas, com a capacidade e os recursos sendo respeitados. |
| **Critérios de Aprovação/Rejeição** | - **Aprovação:** A alocação segue as regras de capacidade e recursos, sem sobrecarga das salas. <br> - **Rejeição:** O algoritmo não aloca corretamente as disciplinas ou excede a capacidade/recursos das salas. |
| **Recursos para o Caso de Teste** | - Ambiente de Teste: Site rooms com acesso ao Banco de Dados. <br> - Ferramentas: Locust, JMeter. |
| **Restrições de Uso**        | O algoritmo deve seguir as regras de capacidade e disponibilidade de recursos (ex.: projetores, computadores). |
| **Dependências**             | CT-02, CT-03                                                                                 |
| **Observações Adicionais**   | Testar diferentes cenários, incluindo sobrecarga de salas e recursos insuficientes.           |


## CT-05: Gerar relatórios de disciplinas e docentes

| **Campo**                    | **Descrição**                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------------|
| **Descrição**                | Verificar a geração de relatórios de disciplinas, horários e docentes, assegurando a exibição correta das informações. |
| **Entradas**                 | - Solicitação de relatório de disciplinas e docentes.                                         |
| **Resultados Esperados**     | - O relatório gerado deve conter todas as informações precisas sobre disciplinas, horários e docentes. |
| **Critérios de Aprovação/Rejeição** | - **Aprovação:** O relatório exibe todas as informações corretamente e sem erros. <br> - **Rejeição:** O relatório está incompleto ou com dados incorretos. |
| **Recursos para o Caso de Teste** | - Ambiente de Teste: Site rooms com acesso ao Banco de Dados. <br> - Ferramentas: Locust, JMeter. |
| **Restrições de Uso**        | O sistema deve garantir que o relatório esteja sempre atualizado com os dados mais recentes.  |
| **Dependências**             | CT-03                                                                                       |
| **Observações Adicionais**   | Testar o caso com diferentes tipos de relatório e filtros aplicados.                         |


## CT-06: Exibir horários e salas disponíveis

| **Campo**                    | **Descrição**                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------------|
| **Descrição**                | Validar se os horários e salas disponíveis estão sendo exibidos de forma clara e atualizada para os usuários. |
| **Entradas**                 | - Solicitação para visualizar horários e salas disponíveis.                                   |
| **Resultados Esperados**     | - A lista de horários e salas disponíveis deve ser exibida corretamente, atualizada em tempo real. |
| **Critérios de Aprovação/Rejeição** | - **Aprovação:** Horários e salas são exibidos corretamente e sem falhas. <br> - **Rejeição:** Os horários ou salas estão incorretos ou desatualizados. |
| **Recursos para o Caso de Teste** | - Ambiente de Teste: Site rooms com acesso ao Banco de Dados. <br> - Ferramentas: Locust, JMeter. |
| **Restrições de Uso**        | O sistema deve garantir que os dados de horários e salas estejam sincronizados com o banco de dados. |
| **Dependências**             | CT-02                                                                                       |
| **Observações Adicionais**   | Testar a exibição em diferentes interfaces e dispositivos (ex.: desktop, mobile).            |

# Especificação de Entradas, Resultados Esperados e Casos de Testes  

## Classes de Equivalência  

### 1. Dados do Professor  

| **Condição de Entrada**     | **Classes Válidas**               | **Classes Inválidas**                       |
|-----------------------------|-----------------------------------|---------------------------------------------|
| **SIAPE**                   | - Texto até 8 caracteres          | - Qualquer texto acima de 8 caracteres <br> - Sem caracteres |
| **Nome do Professor**        | - Texto até 30 caracteres         | - Mais de 30 caracteres <br> - Sem caracteres |
| **Sobrenome do Professor**   | - Texto até 30 caracteres         | - Mais de 30 caracteres <br> - Sem caracteres |


### 2. Dados da Sala  

| **Condição de Entrada**     | **Classes Válidas**               | **Classes Inválidas**                       |
|-----------------------------|-----------------------------------|---------------------------------------------|
| **Número da Sala**           | - Apenas números inteiros         | - Letras e outros símbolos <br> - Números não inteiros <br> - Sem caracteres |
| **Bloco**                   | - 1 único caractere de A a Z      | - Mais de 1 caractere <br> - Outro símbolo fora de A a Z <br> - Sem caracteres |
| **Andar**                   | - Apenas números inteiros         | - Letras e outros símbolos <br> - Números não inteiros <br> - Sem caracteres |
| **Tipo do Espaço**           | - “Sala” <br> - “Laboratório”     | - Qualquer outro valor exceto “Sala” ou “Laboratório” |


### 3. Dados da Disciplina  

| **Condição de Entrada**     | **Classes Válidas**               | **Classes Inválidas**                       |
|-----------------------------|-----------------------------------|---------------------------------------------|
| **Nome da Disciplina**       | - Texto até 30 caracteres         | - Mais de 30 caracteres <br> - Sem caracteres |
| **Código da Disciplina**     | - Texto até 10 caracteres <br> - Cada disciplina deve ter seu próprio código | - Mais de 10 caracteres <br> - Mesmo código que outra disciplina <br> - Sem caracteres |


### 4. Dados do Horário  

| **Condição de Entrada**     | **Classes Válidas**               | **Classes Inválidas**                       |
|-----------------------------|-----------------------------------|---------------------------------------------|
| **Dia da Semana**            | - Texto até 30 caracteres <br> (e.g., "Segunda-feira") | - Mais de 30 caracteres <br> - Sem caracteres |
| **Horário**                  | - Texto até 30 caracteres <br> (e.g., "08:00-09:00")  | - Mais de 30 caracteres <br> - Sem caracteres |


### 5. Validação de Associação  

| **Condição de Entrada**     | **Classes Válidas**               | **Classes Inválidas**                       |
|-----------------------------|-----------------------------------|---------------------------------------------|
| **Disciplina**               | - Somente disciplinas adicionadas | - Qualquer outra disciplina não adicionada  |
| **Espaço**                  | - Somente espaços adicionados     | - Qualquer outro espaço não adicionado      |
| **Professor**               | - Somente professores adicionados | - Qualquer outro professor não adicionado   |


