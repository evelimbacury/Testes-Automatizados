# Plano de Testes - Rooms: Site de Ensalamento

## Informações Gerais
- **Nome do Projeto:** Rooms  
- **Versão do Plano de Teste:** 1.0  
- **Data de Criação:** 14/11/2024  
- **Data de Revisão:** 15/11/2024  
- **Nome do Gerente de Testes:** Evelim Bacury Rocha  
- **Equipe de Testes:** Gabriel Moriz da Silva, Márcio Éric Lamêgo Valente  


## 1. Escopo e Objetivo
O projeto visa a criação de um sistema de ensalamento mais eficiente, automático e de rápida resposta. O objetivo é reduzir o tempo necessário para a formulação e ajustes das tabelas de salas disponíveis para professores e alunos no período letivo. O sistema terá um impacto positivo em outros setores e permitirá a realocação de tempo para atividades mais estratégicas.


## 2. Características do Produto a Serem Testadas
- **Gerenciamento de Usuários:** Cadastrar, alterar e desativar usuários do sistema.  
- **Gerenciamento de Disciplinas:** Manter informações sobre as disciplinas oferecidas.  
- **Gerenciamento de Espaços Físicos:** Manter registro das salas e laboratórios disponíveis.  
- **Gerar Alocações de Espaços Físicos:** Realizar o ensalamento das disciplinas.  
- **Geração de Relatórios:** Gerar relatórios que incluem sala, horário, disciplina e docente.  
- **Disponibilidade de Espaços:** Visualizar horários e salas disponíveis para os usuários.  

## 3. Abordagem a Ser Utilizada 

## Testes de Segurança

| **Item**                | **Descrição**                                           |
|-------------------------|-------------------------------------------------------|
| **Testes**             | Testes de Segurança                                    |
| **Descrição**          | Avaliar a resistência do software a ameaças e tentativas de violação. |
| **Técnica**            | (x) Manual ( ) Automática                              |
| **Estágio do Teste**   | Integração ( ) Sistema ( ) Unidade (x) Aceitação ( )   |
| **Abordagem do Teste** | Caixa Branca ( ) Caixa Preta (x)                       |
| **Ferramenta**         | Selenium                                              |
| **Responsável(is)**    | Equipe de testes                                      |


## Testes Funcionais

| **Item**                | **Descrição**                                           |
|-------------------------|-------------------------------------------------------|
| **Testes**             | Testes Funcionais                                     |
| **Descrição**          | Testar todas as funções principais do aplicativo.      |
| **Técnica**            | (x) Manual (x) Automática                              |
| **Estágio do Teste**   | Integração ( ) Sistema ( ) Unidade (x) Aceitação ( )   |
| **Abordagem do Teste** | Caixa Branca (x) Caixa Preta (x)                       |
| **Ferramenta**         | Selenium                                              |
| **Responsável(is)**    | Equipe de testes                                      |


## Testes de Desempenho

| **Item**                | **Descrição**                                           |
|-------------------------|-------------------------------------------------------|
| **Testes**             | Testes de Desempenho                                  |
| **Descrição**          | Avaliar o tempo de resposta durante picos de uso.      |
| **Técnica**            | (x) Manual (x) Automática                              |
| **Estágio do Teste**   | Integração ( ) Sistema ( ) Unidade (x) Aceitação ( )   |
| **Abordagem do Teste** | Caixa Branca (x) Caixa Preta (x)                       |
| **Ferramenta**         | JMeter                                                |
| **Responsável(is)**    | Equipe de testes                                      |


## Teste de Carga

| **Item**                | **Descrição**                                           |
|-------------------------|-------------------------------------------------------|
| **Testes**             | Teste de Carga                                       |
| **Descrição**          | Testar a capacidade de carga do sistema.              |
| **Técnica**            | ( ) Manual (x) Automática                              |
| **Estágio do Teste**   | Integração ( ) Sistema (x) Unidade ( ) Aceitação ( )   |
| **Abordagem do Teste** | Caixa Branca (x) Caixa Preta (x)                       |
| **Ferramenta**         | Locust, JMeter                                       |
| **Responsável(is)**    | Equipe de testes                                      |


## Testes de Estresse

| **Item**                | **Descrição**                                           |
|-------------------------|-------------------------------------------------------|
| **Testes**             | Testes de Estresse                                    |
| **Descrição**          | Avaliar o comportamento do sistema com múltiplos usuários simultâneos. |
| **Técnica**            | ( ) Manual (x) Automática                              |
| **Estágio do Teste**   | Integração (x) Sistema ( ) Unidade (x) Aceitação ( )   |
| **Abordagem do Teste** | Caixa Branca (x) Caixa Preta (x)                       |
| **Ferramenta**         | Locust, JMeter                                       |
| **Responsável(is)**    | Equipe de testes                                      |

## 4. Itens a Serem Testados
- Processos de criação, edição e desativação de contas.  
- Cadastro, alteração, consulta e exclusão de disciplinas, salas e laboratórios.  
- Cadastro, alteração e exclusão de docentes.  
- Algoritmo de ensalamento com critérios como capacidade e recursos.  
- Geração de relatórios precisos.  
- Exibição de horários e salas disponíveis.  


## 5. Cronograma para o Teste
- **Semana 1:** Preparação do ambiente e execução de testes funcionais, desempenho, carga, estresse e segurança.  
- **Semana 2:** Avaliação final, relatório de bugs e liberação para produção.  


## 6. Pessoal Responsável pelas Diferentes Atividades de Teste
- **Testes Funcionais:** Evelim Bacury, Gabriel Moriz, Márcio Éric  
- **Testes de Desempenho:** Evelim Bacury, Gabriel Moriz, Márcio Éric  
- **Automação de Testes:** Márcio Éric  
- **Gerente de Testes:** Evelim Bacury  
- **Analista de Qualidade:** Gabriel Moriz  


## 7. Riscos Associados aos Testes

### Testes Unitários
- Cobertura incompleta de funções ou métodos críticos.  
- Falsos positivos/negativos por suposições erradas ou erros nos testes.  
- Problemas de integração não detectados.  

### Testes de Integração
- Falhas na comunicação entre módulos.  
- Dependências externas ausentes ou simuladas inadequadamente.  

### Testes de Desempenho
- Métricas mal definidas ou irrelevantes.  
- Ferramentas que não simulam tráfego real.  
- Cargas não representativas dos picos reais de uso.  

### Testes de Segurança
- Vulnerabilidades não detectadas.  
- Limitações de ferramentas automáticas.  
- Restrições legais ou organizacionais.  
- Rápida desatualização devido a mudanças nas ameaças.
