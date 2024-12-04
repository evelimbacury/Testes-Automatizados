# Plano de Testes - Rooms: Site de Ensalamento

- **Nome do Projeto:** Rooms
- **Versão do Plano de Teste:** 1.0
- **Data de Criação:** 14/11/2024
- **Data de Revisão** 15/11/2024
- **Nome do Gerente de Testes:** Evelim Bacury Rocha
- **Equipe de Testes:** Gabriel Moriz da Silva e Márcio Éric Lamêgo Valente

## 1. Escopo e Objetivo

O projeto baseia-se na necessidade de um melhor sistema de ensalamento,
sendo ele, mais automático e de rápida resposta na formulação de tabelas, diminuindo
consideravelmente o tempo de preparo e ajustes para exibição das salas disponíveis para
cada professor e aluno no período letivo. Assim, algo que gastava muito tempo no seu
processo e pedia uma alta demanda, se tornará em um processo mais automático e de alta
eficiência, que impacta positivamente outros setores e economiza tempo que poderá ser
gasto com outras frentes importantes.

## 2. Características do Produto a Serem Testadas

- **Gerenciamento de Usuários:** Cadastrar usuários do sistema.
- **Gerenciamento de Disciplinas:** Manter informações sobre as disciplinas oferecidas.
- **Gerenciamento de Espaços Físicos:** Manter registro das salas e laboratórios disponíveis.
- **Gerar Alocações de Espaços Físicos:** Realizar o ensalamento das disciplinas.
- **Geração de Relatórios:** Gerar relatórios de ensalamento que incluem dados como sala, horário, disciplina e docente.
- **Disponibilidade de Espaços:** Visualizar horários e salas/laboratórios disponíveis para os usuários.

## 3. Abordagem a Ser Utilizada

### Descrição:

A abordagem de teste define quais técnicas, métodos e ferramentas serão usadas no processo. Ela ajuda a garantir a cobertura adequada das funcionalidades.

| **Item**            | **Descrição**                                                         |
| ------------------- | --------------------------------------------------------------------- |
| Testes de Segurança | Avaliar a resistência do software a ameaças e tentativas de violação. |
| Técnica             | Manual (X) Automática ( )                                             |
| Estágio do Teste    | Integração ( ) Sistema ( ) Unidade ( ) Aceitação (X)                  |
| Abordagem do Teste  | Caixa Branca ( ) Caixa Preta (X)                                      |
| Ferramenta          | Selenium                                                              |
| Responsável(is)     | Equipe de testes                                                      | <br>

</br>

| **Item**            | **Descrição**                                        |
| ------------------- | ---------------------------------------------------- | 
| Testes de Segurança | Testar todas as funções principais do aplicativo.    |
| Técnica             | Manual (X) Automática (X)                            |
| Estágio do Teste    | Integração ( ) Sistema ( ) Unidade ( ) Aceitação (X) |
| Abordagem do Teste  | Caixa Branca (X) Caixa Preta (X)                     |
| Ferramenta          | Selenium                                             |
| Responsável(is)     | Equipe de testes                                     | <br> 

</br>

| **Item**            | **Descrição**                                        |
| ------------------- | ---------------------------------------------------- |
| Testes de Segurança | Avaliar o tempo de resposta durante picos de uso.    |
| Técnica             | Manual (X) Automática (X)                            |
| Estágio do Teste    | Integração ( ) Sistema ( ) Unidade (X) Aceitação ( ) |
| Abordagem do Teste  | Caixa Branca (X) Caixa Preta (X)                     |
| Ferramenta          | JMeter                                               |
| Responsável(is)     | Equipe de testes                                     | <br>

</br>

| **Item**            | **Descrição**                                        |
| ------------------- | ---------------------------------------------------- | 
| Testes de Segurança | Testar a capacidade de carga do sistema.             |
| Técnica             | Manual ( ) Automática (X)                            |
| Estágio do Teste    | Integração ( ) Sistema (X) Unidade ( ) Aceitação ( ) |
| Abordagem do Teste  | Caixa Branca (X) Caixa Preta (X)                     |
| Ferramenta          | JMeter                                               |
| Responsável(is)     | Equipe de testes                                     | <br>

</br>

| **Item**            | **Descrição**                                                          |
| ------------------- | ---------------------------------------------------------------------- |
| Testes de Segurança | Avaliar o comportamento do sistema com múltiplos usuários simultâneos. |
| Técnica             | Manual ( ) Automática (X)                                              |
| Estágio do Teste    | Integração ( ) Sistema ( ) Unidade (X) Aceitação ( )                   |
| Abordagem do Teste  | Caixa Branca (X) Caixa Preta (X)                                       |
| Ferramenta          | Locust, JMeter                                                         |
| Responsável(is)     | Equipe de testes                                                       | <br>

</br>

## 4. Itens a Serem Testados

### Descrição:

Os componentes do sistema que serão testados, desde funcionalidades até módulos específicos.

- Testar o processo de criação de contas, garantindo a aplicação correta das permissões de acesso.
- Verificar a funcionalidade de cadastrar, alterar, consultar e excluir disciplinas do sistema, confirmando que todas as informações são armazenadas corretamente.
- Verificar a funcionalidade de cadastrar, alterar, consultar e excluir salas e laboratórios do sistema, confirmando que todas as informações são armazenadas corretamente.
- Verificar a funcionalidade de cadastrar, alterar, consultar e excluir docentes do sistema, confirmando que todas as informações são armazenadas corretamente.
- Testar o algoritmo de ensalamento, verificando a alocação adequada das disciplinas conforme critérios como capacidade e recursos das salas.
- Garantir que os relatórios sejam gerados corretamente, exibindo informações precisas sobre disciplinas, horários e docentes.
- Validar que os horários e salas disponíveis sejam exibidos de forma clara e atualizada para os usuários.

## 5. Cronograma para o Teste

- **Semana 1:** Preparação do ambiente e execução de testes funcionais, desempenho, carga, estresse e segurança.
- **Semana 2:** Avaliação final, relatório de bugs e liberação para produção.

## 6. Pessoal Responsável pelas Diferentes Atividades de Teste

- **Responsáveis por Testes Funcionais:** Evelim Bacury, Gabriel Moriz, Márcio Éric
- **Responsáveis por Testes de Desempenho:** Evelim Bacury, Gabriel Moriz, Márcio Éric
- **Responsável por Automação de Testes:** Márcio Éric
- **Gerente de Testes:** Evelim Bacury
- **Analista de Qualidade:** Gabriel Moriz

## 7. Os Riscos Associados aos Testes

### Testes Unitários

- **Cobertura Incompleta:** Falta de testes para todas as funções ou métodos críticos do código.
- **Falsos Positivos/Negativos:** Resultados incorretos devido a suposições erradas ou erros no próprio teste.
- **Integração Subestimada:** Problemas de integração não detectados, pois os testes focam apenas em unidades isoladas.

### Testes de Integração

- **Problemas de Comunicação entre Módulos:** Falhas na integração de componentes ou APIs mal definidas.
- **Ambiente Incompleto:** Dependências externas ou de terceiros ausentes ou simuladas de forma inadequada.

### Testes de Desempenho

- **Métricas Mal Definidas:** Indicadores de desempenho pouco claros ou irrelevantes para os objetivos do sistema.
- **Limitações de Ferramentas:** Ferramentas de teste que não simulam adequadamente o tráfego real.
- **Carga Inadequada:** Testes com cargas que não refletem picos reais de uso.
- **Alocação Insuficiente de Recursos:** Caso a equipe de teste não seja suficiente para cobrir todos os cenários até o prazo final, pode ocorrer falta de cobertura nos testes.

### Testes de Segurança

- **Falsos Negativos:** Vulnerabilidades podem passar despercebidas devido a testes incompletos.
- **Dependência de Ferramentas:** Ferramentas automáticas que não identificam ameaças complexas ou específicas.
- **Ambiente Restrito:** Restrições legais ou organizacionais podem limitar testes de invasão.
- **Atualizações Contínuas:** Mudanças frequentes em ameaças de segurança podem tornar os testes rapidamente desatualizados. <br>
</br>

# Especificação dos Casos de Teste
## 1. Caracterização do Caso de Teste 
### Descrição: 
Cada caso de teste descreve uma situação ou funcionalidade específica do aplicativo que precisa  ser verificada. É uma maneira de validar se o sistema está funcionando conforme esperado. 

| **Item**                          | **Descrição**                                                                                       |
|-----------------------------------|-----------------------------------------------------------------------------------------------------|
| **Identificador**                 | CT-01                                                                                              |
| **Caso de Teste**                 | Testar o processo de login e logout de usuário.                                                    |
| **Descrição**                     | Testar o processo de login e logout de usuário.                                                    |
| **Entradas**                      | - Parâmetros necessários para um login de usuário.                                                 |
| **Resultados Esperados**          | - Uma nova conta com os parâmetros anteriores foi adicionada.                                      |
| **Critérios para Aprovação/Rejeição** | - **Aprovação**: Todos os dados foram aplicados da maneira certa, e as funções executadas da maneira certa.  |
|                                   | - **Rejeição**: Dados incorretos foram adicionados, ou de forma incorreta.                         |
| **Recursos para o Caso de Teste** | - **Ambiente de Teste**: Site rooms com acesso ao Banco de dados.                                  |
|                                   | - **Ferramentas**: Locust, JMeter, Cypress.                                                       |
| **Restrições de Uso**             | - Os parâmetros corretos devem ser adicionados e seus respectivos tipos.                          |
| **Dependências**                  | -                                                                                                 |
| **Observações Adicionais**        | - Documentar quaisquer anomalias ou comportamentos inesperados.                                    | 
<br>

</br>

| **Item**                          | **Descrição**                                                                                       |
|-----------------------------------|-----------------------------------------------------------------------------------------------------|
| **Identificador**                 | CT-02                                                                                              |
| **Caso de Teste**                 | Verificar a funcionalidade de cadastrar, alterar, consultar e excluir disciplinas.                 |
| **Descrição**                     | Verificar a funcionalidade de cadastrar, alterar, consultar e excluir disciplinas, confirmando que todas as informações são armazenadas corretamente. |
| **Entradas**                      | - Parâmetros necessários para cadastrar uma disciplina.                                            |
|                                   | - Parâmetros necessários para a edição de disciplina.                                              |
|                                   | - Consulta de uma disciplina.                                                                      |
|                                   | - Remoção de uma disciplina.                                                                       |
| **Resultados Esperados**          | - Uma nova disciplina com os parâmetros anteriores foi adicionada.                                 |
|                                   | - A disciplina alvo foi alterada com os parâmetros adicionados na edição.                         |
|                                   | - A disciplina alvo foi consultada.                                                               |
|                                   | - A disciplina alvo foi excluída.                                                                 |
| **Critérios para Aprovação/Rejeição** | - **Aprovação**: Todos os dados foram aplicados da maneira certa, e as funções executadas da maneira certa.  |
|                                   | - **Rejeição**: Dados incorretos foram adicionados, ou de forma incorreta. A disciplina não foi removida. |
| **Recursos para o Caso de Teste** | - **Ambiente de Teste**: Site rooms com acesso ao Banco de dados.                                  |
|                                   | - **Ferramentas**: Cypress.                                                                       |
| **Restrições de Uso**             | - Os parâmetros corretos devem ser adicionados e seus respectivos tipos.                          |
| **Dependências**                  | -                                                                                                 |
| **Observações Adicionais**        | - Documentar quaisquer anomalias ou comportamentos inesperados.                                    |  
<br>

</br>

| **Item**                          | **Descrição**                                                                                       |
|-----------------------------------|-----------------------------------------------------------------------------------------------------|
| **Identificador**                 | CT-03                                                                                              |
| **Caso de Teste**                 | Verificar a funcionalidade de cadastrar, alterar, consultar e excluir docentes.                    |
| **Descrição**                     | Verificar a funcionalidade de cadastrar, alterar, consultar e excluir docentes, confirmando que todas as informações são armazenadas corretamente. |
| **Entradas**                      | - Parâmetros necessários para cadastrar um docente.                                                |
|                                   | - Parâmetros necessários para a edição de docente.                                                 |
|                                   | - Consulta de uma as informações de um docente.                                                    |
|                                   | - Remoção de uma docente.                                                                          |
| **Resultados Esperados**          | - Um novo docente com os parâmetros anteriores foi adicionada.                                     |
|                                   | - O docente alvo foi alterado com os parâmetros adicionados na edição.                             |
|                                   | - O docente alvo foi consultado.                                                                   |
|                                   | - O docente alvo foi excluído.                                                                     |
| **Critérios para Aprovação/Rejeição** | - **Aprovação**: Todos os dados foram aplicados da maneira certa, e as funções executadas da maneira certa.  |
|                                   | - **Rejeição**: Dados incorretos foram adicionados, ou de forma incorreta. O docente não foi removido. |
| **Recursos para o Caso de Teste** | - **Ambiente de Teste**: Site rooms com acesso ao Banco de dados.                                  |
|                                   | - **Ferramentas**: Cypress.                                                                       |
| **Restrições de Uso**             | - Os parâmetros corretos devem ser adicionados e seus respectivos tipos.                          |
| **Dependências**                  | - .                                                                                               |
| **Observações Adicionais**        | - Documentar quaisquer anomalias ou comportamentos inesperados.                                    |
<br>

</br>

| **Item**                          | **Descrição**                                                                                       |
|-----------------------------------|-----------------------------------------------------------------------------------------------------|
| **Identificador**                 | CT-04                                                                                              |
| **Caso de Teste**                 | Testar o algoritmo de ensalamento                                                                   |
| **Descrição**                     | Validar o algoritmo de alocação de disciplinas nas salas, garantindo que a capacidade e os recursos das salas sejam respeitados. |
| **Entradas**                      | - Lista de disciplinas, sala disponível, número de alunos e recursos necessários.                  |
| **Resultados Esperados**          | - As disciplinas devem ser alocadas corretamente às salas, com a capacidade e os recursos sendo respeitados. |
| **Critérios para Aprovação/Rejeição** | - **Aprovação**: A alocação segue as regras de capacidade e recursos, sem sobrecarga das salas.  |
|                                   | - **Rejeição**: O algoritmo não aloca corretamente as disciplinas ou excede a capacidade/recursos das salas. |
| **Recursos para o Caso de Teste** | - **Ambiente de Teste**: Site rooms com acesso ao Banco de dados.                                  |
|                                   | - **Ferramentas**: Locust, JMeter.                                                                 |
| **Restrições de Uso**             | - O algoritmo deve seguir as regras de capacidade e disponibilidade de recursos (ex.: projetores, computadores). |
| **Dependências**                  | - CT-02, CT-03                                                                                      |
| **Observações Adicionais**        | - Testar diferentes cenários, incluindo sobrecarga de salas e recursos insuficientes.                |
<br>

</br>

| **Item**                          | **Descrição**                                                                                       |
|-----------------------------------|-----------------------------------------------------------------------------------------------------|
| **Identificador**                 | CT-05                                                                                              |
| **Caso de Teste**                 | Gerar relatórios de disciplinas e docentes                                                          |
| **Descrição**                     | Verificar a geração de relatórios de disciplinas, horários e docentes, assegurando a exibição correta das informações. |
| **Entradas**                      | - Solicitação de relatório de disciplinas e docentes.                                              |
| **Resultados Esperados**          | - O relatório gerado deve conter todas as informações precisas sobre disciplinas, horários e docentes. |
| **Critérios para Aprovação/Rejeição** | - **Aprovação**: O relatório exibe todas as informações corretamente e sem erros.                  |
|                                   | - **Rejeição**: O relatório está incompleto ou com dados incorretos.                               |
| **Recursos para o Caso de Teste** | - **Ambiente de Teste**: Site rooms com acesso ao Banco de dados.                                  |
|                                   | - **Ferramentas**: Locust, JMeter.                                                                 |
| **Restrições de Uso**             | - O sistema deve garantir que o relatório esteja sempre atualizado com os dados mais recentes.     |
| **Dependências**                  | - CT-03                                                                                             |
| **Observações Adicionais**        | - Testar o caso com diferentes tipos de relatório e filtros aplicados.                              |
<br>

</br>

| **Item**                          | **Descrição**                                                                                       |
|-----------------------------------|-----------------------------------------------------------------------------------------------------|
| **Identificador**                 | CT-06                                                                                              |
| **Caso de Teste**                 | Exibir horários e salas disponíveis                                                                |
| **Descrição**                     | Validar se os horários e salas disponíveis estão sendo exibidos de forma clara e atualizada para os usuários. |
| **Entradas**                      | - Solicitação para visualizar horários e salas disponíveis.                                        |
| **Resultados Esperados**          | - A lista de horários e salas disponíveis deve ser exibida corretamente, atualizada em tempo real.  |
| **Critérios para Aprovação/Rejeição** | - **Aprovação**: Horários e salas são exibidos corretamente e sem falhas.                          |
|                                   | - **Rejeição**: Os horários ou salas estão incorretos ou desatualizados.                           |
| **Recursos para o Caso de Teste** | - **Ambiente de Teste**: Site rooms com acesso ao Banco de dados.                                  |
|                                   | - **Ferramentas**: Locust, JMeter.                                                                 |
| **Restrições de Uso**             | - O sistema deve garantir que os dados de horários e salas estejam sincronizados com o banco de dados. |
| **Dependências**                  | - CT-02                                                                                             |
| **Observações Adicionais**        | - Testar a exibição em diferentes interfaces e dispositivos (ex.: desktop, mobile).                  |
<br>

</br>

| **Item**                          | **Descrição**                                                                                       |
|-----------------------------------|-----------------------------------------------------------------------------------------------------|
| **Identificador**                 | CT-07                                                                                              |
| **Caso de Teste**                 | Testar o processo de criação, edição e exclusão de alocações                                        |
| **Descrição**                     | Testar o processo de criação, edição e exclusão das alocações.                                      |
| **Entradas**                      | - Parâmetros necessários para a criação de uma alocação.                                           |
| **Resultados Esperados**          | - Uma nova alocação com os parâmetros anteriores foi adicionada.                                    |
| **Critérios para Aprovação/Rejeição** | - **Aprovação**: Todos os dados foram aplicados da maneira certa, e as funções executadas da maneira certa. |
|                                   | - **Rejeição**: Dados incorretos foram adicionados, ou de forma incorreta/Alocação já ocupada.      |
| **Recursos para o Caso de Teste** | - **Ambiente de Teste**: Site rooms com acesso ao Banco de dados.                                  |
|                                   | - **Ferramentas**: Locust, JMeter.                                                                 |
| **Restrições de Uso**             | - Os parâmetros corretos devem ser adicionados e seus respectivos tipos.                           |
| **Dependências**                  | - CT-02                                                                                             |
| **Observações Adicionais**        | - Documentar quaisquer anomalias ou comportamentos inesperados.                                     |
<br>

</br>

| **Item**                          | **Descrição**                                                                                       |
|-----------------------------------|-----------------------------------------------------------------------------------------------------|
| **Identificador**                 | CT-08                                                                                              |
| **Caso de Teste**                 | Testar o processo de criação, edição e exclusão de espaços físicos                                 |
| **Descrição**                     | Testar o processo de criação, edição e exclusão dos espaços físicos.                                |
| **Entradas**                      | - Parâmetros necessários para a criação de um espaço físico.                                        |
| **Resultados Esperados**          | - Um novo espaço físico com os parâmetros anteriores foi adicionado.                                 |
| **Critérios para Aprovação/Rejeição** | - **Aprovação**: Todos os dados foram aplicados da maneira certa, e as funções executadas da maneira certa. |
|                                   | - **Rejeição**: Dados incorretos foram adicionados, ou de forma incorreta/Espaços físicos já ocupados. |
| **Recursos para o Caso de Teste** | - **Ambiente de Teste**: Site rooms com acesso ao Banco de dados.                                  |
|                                   | - **Ferramentas**: Locust, JMeter.                                                                 |
| **Restrições de Uso**             | - Os parâmetros corretos devem ser adicionados e seus respectivos tipos.                           |
| **Dependências**                  | -                                                                                                   |
| **Observações Adicionais**        | - Documentar quaisquer anomalias ou comportamentos inesperados.                                     |
<br>

</br>

| **Item**                          | **Descrição**                                                                                       |
|-----------------------------------|-----------------------------------------------------------------------------------------------------|
| **Identificador**                 | CT-09                                                                                              |
| **Caso de Teste**                 | Testar o processo de download de lista de ensalamento                                               |
| **Descrição**                     | Testar o processo de download de lista de ensalamento.                                             |
| **Entradas**                      | - Parâmetros necessários para a criação de um espaço físico.                                        |
| **Resultados Esperados**          | - Um PDF com a lista de ensalamento com todas as informações corretas.                              |
| **Critérios para Aprovação/Rejeição** | - **Aprovação**: Todos os dados fornecidos da maneira correta.                                   |
|                                   | - **Rejeição**: Dados incorretos/Não realizar a emissão do PDF.                                    |
| **Recursos para o Caso de Teste** | - **Ambiente de Teste**: Site rooms com acesso ao Banco de dados.                                  |
|                                   | - **Ferramentas**: Locust, JMeter.                                                                 |
| **Restrições de Uso**             | - Os parâmetros corretos devem ser adicionados e seus respectivos tipos.                           |
| **Dependências**                  | - CT-10                                                                                             |
| **Observações Adicionais**        | - Documentar quaisquer anomalias ou comportamentos inesperados.                                     |
<br>

</br>

| **Item**                          | **Descrição**                                                                                       |
|-----------------------------------|-----------------------------------------------------------------------------------------------------|
| **Identificador**                 | CT-10                                                                                              |
| **Caso de Teste**                 | Testar o filtro de lista de ensalamento                                                             |
| **Descrição**                     | Testar o filtro de lista de ensalamento.                                                           |
| **Entradas**                      | - Parâmetros necessários para filtro de informações desejadas na lista de ensalamento.              |
| **Resultados Esperados**          | - Apenas as informações que o usuário requisitou.                                                  |
| **Critérios para Aprovação/Rejeição** | - **Aprovação**: Filtragem das informações da maneira correta.                                     |
|                                   | - **Rejeição**: Dados incorretos.                                                                   |
| **Recursos para o Caso de Teste** | - **Ambiente de Teste**: Site rooms com acesso ao Banco de dados.                                  |
|                                   | - **Ferramentas**: Locust, JMeter.                                                                 |
| **Restrições de Uso**             | - Os parâmetros corretos devem ser adicionados e seus respectivos tipos.                           |
| **Dependências**                  |                                                                                                     |
| **Observações Adicionais**        | - Documentar quaisquer anomalias ou comportamentos inesperados.                                     |
<br>

</br>

## 2. Especificação de Entradas, Resultados Esperados e Casos de Testes 

### Login
### Classes de equivalência

| **Condição de Entrada** | **Classes Válidas**        | **Classes Inválidas**     |
|-------------------------|----------------------------|---------------------------|
| **Usuário**             | Usuário cadastrado (1)     | Usuário não cadastrado (2) |
|                         |                            | Campo vazio (3)           |
| **Senha**               | Senha correta (4)          | Senha incorreta (5)       |
|                         |                            | Campo vazio (6)           |

### Caso de Teste

| **Classes de Equivalência** | **Usuário**       | **Senha**                  | **Resultado Esperado**                                          |
|-----------------------------|-------------------|----------------------------|-----------------------------------------------------------------|
| 1, 4                          | admin             | admin                                 | Entrada válida: O usuário é existente e a senha está correta.  |
| 2, 4                           | novoAdmin         | admin                                | Erro: Usuário não existente.                 |
| 3, 4                           | -                | admin                                | Erro: Campo Usuário não pode estar           |
| 1, 5                           | admin              | senhadoadmininstradordosite          | Erro: Senha incorreta.                       |
| 1, 6                           | admin             |    -                                 | Erro: Campo senha não pode estar vazio.      |

### Professor
### Classes de equivalência

| Condição de Entrada      | Classes Válidas                  | Classes Inválidas               |
|--------------------------|----------------------------------|---------------------------------|
| SIAPE                    | - Código de 7 dígitos (1)        | - Letras e outros símbolos (2)  |
|                          |                                  | - Mais ou menos de 8 dígitos (3)|
|                          |                                  | - Campo vazio (4)               |
| Nome do professor        | - Texto até 30 caracteres (5)    | - Qualquer dígito no texto (6)  |
|                          |                                  | - Mais de 30 caracteres (7)     |
|                          |                                  | - Campo vazio (8)               |
| Sobrenome do professor   | - Texto até 30 caracteres (9)    | - Qualquer dígito no texto (10) |
|                          |                                  | - Mais de 30 caracteres (11)    |
|                          |                                  | - Campo vazio (12)              |

### Caso de Teste

| Classes de Equivalência | SIAPE          | Nome do Professor               | Sobrenome do Professor         | Resultado                                                        |
|-------------------------|----------------|---------------------------------|--------------------------------|------------------------------------------------------------------|
| 1, 5, 9                 | 1234567        | Felipe                          | Oliveira                       | Entrada válida: Todos os campos atendem aos critérios definidos. |
| 2, 5, 9                 | AB12345        | Felipe                          | Oliveira                       | Erro: Campo SIAPE deve conter somente números, sem letras ou símbolos. |
| 3, 5, 9                 | 12345678 ou 12345 | Felipe                       | Oliveira                       | Erro: Campo SIAPE deve conter exatamente 7 dígitos.              |
| 4, 5, 9                 |                | Felipe                          | Oliveira                       | Erro: Campo SIAPE não pode estar vazio.                          |
| 1, 6, 9                 | 1234567        | Felip3                          | Oliveira                       | Erro: Campo Nome do Professor não deve conter números.           |
| 1, 7, 9                 | 1234567        | Felipe João Carlos da Silveira Pereira | Oliveira               | Erro: Nome do Professor deve conter no máximo 30 caracteres.     |
| 1, 8, 9                 | 1234567        |                                 | Oliveira                       | Erro: Campo Nome do Professor não pode estar vazio.              |
| 1, 5, 10                | 1234567        | Felipe                          | Oliveir4                       | Erro: Campo Sobrenome do Professor não deve conter números.     |
| 1, 5, 11                | 1234567        | Felipe                          | João Carlos da Silveira Pereira Oliveira | Erro: Sobrenome do Professor deve conter no máximo 30 caracteres. |
| 1, 5, 12                | 1234567        | Felipe                          |                                | Erro: Campo Sobrenome do Professor não pode estar vazio.         |

### Espaço
### Classes de equivalência

| Condição de Entrada      | Classes Válidas                     | Classes Inválidas                                 |
|--------------------------|-------------------------------------|---------------------------------------------------|
| Número da sala           | - Apenas números inteiros com 3 dígitos (1) | - Letras e outros símbolos (2)                  |
|                          |                                     | - Números não inteiros (3)                      |
|                          |                                     | - Campo vazio (4)                               |
| Bloco                    | - 1 único caractere de A a E (5)     | - Mais de 1 caractere (6)                        |
|                          |                                     | - Outro símbolo fora de A a E (7)                |
|                          |                                     | - Campo vazio (8)                               |
| Andar                    | - Apenas números inteiros 0 a 2 (9) | - Letras e outros símbolos (10)                  |
|                          |                                     | - Números não inteiros (11)                     |
|                          |                                     | - Números fora do intervalo [0-2] (12)           |
|                          |                                     | - Sem caracteres (13)                           |
| Tipo do espaço           | - Deve ser “Sala” ou “Laboratório” (14) | -                                                  |

### Caso de Teste

| Classe de Equivalência | Número da sala | Bloco | Andar | Tipo de Espaço | Resultado                                                     |
|------------------------|----------------|-------|-------|----------------|---------------------------------------------------------------|
| 1, 5, 9, 14            | 308            | D     | 2     | Laboratório    | Entrada válida: Todos os campos atendem aos critérios definidos. |
| 2, 5, 9, 14            | E0@            | D     | 2     | Laboratório    | Erro: Campo “número da sala” deve conter apenas valores numéricos inteiros de exatamente 3 dígitos. |
| 3, 5, 9, 14            | 308.8          | D     | 2     | Laboratório    | Erro: Campo “número da sala” aceita apenas números inteiros (sem casas decimais). |
| 4, 5, 9, 14            |                | D     | 2     | Laboratório    | Erro: Campo “número da sala” não pode estar vazio.            |
| 1, 6, 9, 14            | 308            | DE    | 2     | Laboratório    | Erro: Campo “bloco” deve conter apenas um único caractere (A a E). |
| 1, 7, 9, 14            | 308            | F     | 2     | Laboratório    | Erro: Campo “bloco” aceita apenas letras de A a E.            |
| 1, 8, 9, 14            | 308            |       | 2     | Laboratório    | Erro: Campo “bloco” não pode estar vazio.                      |
| 1, 5, 10, 14           | 308            | D     | B     | Laboratório    | Erro: Campo “andar” deve conter apenas números inteiros (0, 1 ou 2). |
| 1, 5, 11, 14           | 308            | D     | 2.5   | Laboratório    | Erro: Campo “andar” aceita apenas números inteiros sem valores decimais. |
| 1, 5, 12, 14           | 308            | D     | 3     | Laboratório    | Erro: Campo “andar” deve estar no intervalo permitido (0, 1 ou 2). |
| 1, 5, 13, 14           | 308            | D     |       | Laboratório    | Erro: Campo “andar” não pode estar vazio.                      |

### Disciplina
### Classes de equivalência

| Condição de Entrada     | Classes Válidas                      | Classes Inválidas                                  |
|-------------------------|--------------------------------------|----------------------------------------------------|
| Nome da disciplina      | - Texto até 30 caracteres (1)        | - Mais de 30 caracteres (2)                        |
|                         |                                      | - Campo vazio (3)                                  |
| Código da Disciplina    | - Texto até 6 caracteres (4)         | - Código não cadastrado (6)                        |
|                         | - (e.g., “ITI330”) (5)               | - Mais de 6 caracteres (7)                         |
|                         |  - Código já cadastrado(9)           | - Fora do padrão (8)                               |
|                         |                                      | - Campo vazio (10)                                 |

### Casos de Teste

| Classe de Equivalência | Nome da Disciplina                             | Código da Disciplina | Resultado                                                       |
|------------------------|-------------------------------------------------|-----------------------|-----------------------------------------------------------------|
| 1, 4                   | Programação I                                  | ITI200                | Entrada válida: Nome da disciplina e código atendem aos critérios; código cadastrado corretamente. |
| 2, 4                   | Programação Avançada para Sistemas Complexos   | ITI200                | Erro: Nome da disciplina deve ter no máximo 30 caracteres.     |
| 3, 4                   |                                                 | ITI200                | Erro: Nome da disciplina não pode estar vazio.                  |
| 1, 8                   | Programação I                                  | 1234AB                | Erro: Código da disciplina não está no padrão correto (exemplo: “ITI330”). |
| 1, 7                   | Programação I                                  | ITI3307               | Erro: Código da disciplina deve conter no máximo 6 caracteres. |
| 1, 9                   | Programação I                                  | ITI200                | Erro: Código da disciplina já está cadastrado; duplicação não permitida. |
| 1, 10                  | Programação I                                  |                       | Erro: Código da disciplina não pode estar vazio.                |

### Alocação
### Classes de equivalência

| Condição de Entrada     | Classes Válidas                       |
|-------------------------|---------------------------------------|
| Dia da semana           | - Somente dias cadastrados (1)        |
| Horário                 | - Somente horários cadastrados (2)    |
| Disciplina              | - Somente disciplinas cadastradas (3) |
| Espaço                  | - Somente espaços cadastrados (4)     |
| Professor               | - Somente professores cadastrados (5) |


### Casos de Teste

| Classe de Equivalência | Dia da Semana | Horário    | Disciplina   | Espaço | Professor       | Resultado                                            |
|------------------------|---------------|------------|--------------|--------|-----------------|------------------------------------------------------|
| 1, 2, 3, 4, 5          | Segunda-Feira | 10:00-12:00| Programação I| D-308  | Felipe Oliveira | Entrada válida: O sistema alocará o local para a disciplina |
