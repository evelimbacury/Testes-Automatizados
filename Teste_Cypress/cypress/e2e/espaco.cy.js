describe('template spec', () => {
  
  beforeEach(() => {
    // Visitar a Página e Acessar como Administrador
    cy.visit('localhost:8000')

    // Ação de login
    cy.get('.loginb')
    .should('be.visible')
    .and('contain', 'Acessar como Administrador').click();

    cy.get('#id_username')
      .should('be.visible')
      .type('admin');

    cy.get('#id_password')
      .should('be.visible')
      .type('admin');

    cy.get('.buttonlogin')
      .should('be.visible')
      .and('contain', 'Entrar')
      .click();

    cy.url().should('include', '/dashboard');

    // Entrar na Página Espaço
    cy.get('.OPC')
      .should('be.visible').click();
  });

  it('Adicionar Espaço', () =>{
    cy.get('.return')
      .should('be.visible')
      .and('contain', 'Adicionar Novo Espaço').click();

    // Adicionar Espaço
    cy.get('#space_floor')
    .should('be.visible')
    .type('3');

    cy.get('#space_number')
      .should('be.visible')
      .type('309')

    cy.get('#space_block')
    .should('be.visible')
    .type('D')

    cy.get('#space_type').select('Sala')

    cy.get('.button')
      .should('be.visible')
      .and('contain', 'Adicionar').click();

  });

  it('Editar Espaço', () =>{
    cy.get('ul').should('be.visible');
    // Editar Espaço
    cy.contains('li','D - 309 (Andar: 3) - Sala')
      .find('a')
      .contains('Editar')
      .click();

    cy.get('#space_floor')
      .should('be.visible')
      .clear()
      .type('2');

    cy.get('#space_type').select('Laboratório')

    // Clica no botão de salvar
    cy.get('.button')
      .contains('Salvar')
      .click();

    // Verifica se os dados foram atualizado na lista
    cy.contains('D - 309 (Andar: 2) - Laboratório').should('exist');
    cy.contains('D - 309 (Andar: 3) - Sala').should('not.exist');
  
     });


  it('Excluir Espaço', () =>{
    cy.get('ul').should('be.visible');

    cy.contains('li', 'D - 309 (Andar: 2) - Laboratório')
      .find('a')
      .contains('Excluir')
      .click();

    cy.get('button')
    .contains('Confirmar Exclusão')
    .click();

    // Verifica se espaço foi excluido na lista
    cy.contains('D - 309 (Andar: 2) - Laboratório').should('not.exist');
  });
})  