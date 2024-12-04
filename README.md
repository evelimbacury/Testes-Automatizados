# Trabalho Prático 2 - Plano de Testes e Testes Automatizados

Este repositório contém o trabalho prático sobre Plano de Testes e a prática de testes automatizados com a ferramenta Cypress, realizado na disciplina **Testes, Validação e Verificação de Software** da **Universidade Federal do Amazonas**.

---

## 📋 Introdução

O objetivo deste trabalho é construir um plano de testes para a aplicação web **Rooms Ensalamentos** e executar esses testes utilizando a ferramenta **Cypress**.

---

## ⚙️ Requisitos

Antes de começar, certifique-se de que o ambiente possui os seguintes requisitos instalados:

- **Python** (versão 3 ou superior)
- **Node.js** (para executar o Cypress)

---

## 🚀 Instalação e Execução

Siga as etapas abaixo para configurar o ambiente e realizar os testes.

### **1. Configuração da Aplicação Rooms**

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/vnsantoxs/RoomsProject.git
   cd RoomsProject/

2. **Crie e ative um ambiente virtual:**

   - **Linux/Mac**:

      ```bash
      python -m venv venv
      source venv/bin/activate

   - **Windows** (usando Git Bash):

      ```bash
      python -m venv venv
      source venv/Scripts/activate

3. **Instale as dependências:**
   ```bash
   pip install -r requirements.txt

- Caso ocorra algum problema, instale manualmente as principais dependências:

   ```bash
   pip install Django reportlab scikit-learn
   ```
4. **Configure o banco de dados:**
   ```bash
   python manage.py migrate
   ```

5. **Inicie o servidor:**

   ```bash
   python manage.py runserver
   ```
Após iniciar o servidor, clique no link fornecido para acessar a aplicação web.

---

## 2. Configuração dos Testes com Cypress
1. **Acesse a pasta de testes:**

```bash
cd ..
cd Teste_Cypress/
```
Instale o **npm** (caso não esteja instalado previamente).

2. **Execute o Cypress:**

```bash
npx cypress open
```
Após isso, o ambiente de testes será aberto e você poderá executar os casos de teste.

---
## 📝 Observações
- Certifique-se de que a aplicação web esteja rodando antes de executar os testes no Cypress.
- Para mais informações sobre o Cypress, visite a [documentação oficial](https://docs.cypress.io/app/get-started/why-cypress).


<div align="center">
<h3>Bons testes! 🚀</h3>
</div>
