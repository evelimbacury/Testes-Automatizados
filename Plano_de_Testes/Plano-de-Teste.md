# Plano de Testes - Rooms: Site de Ensalamento

- **Nome do Projeto:** Rooms
- **Versão do Plano de Teste:** 2.0
- **Data de Criação:** 14/11/2024
- **Data de Revisão** 03/12/2024
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
