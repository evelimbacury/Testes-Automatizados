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

    // Entrar na Página Professor
    cy.get('.OPD')
      .should('be.visible').click();
  });

  it('Adicionar Professor', () =>{
  cy.get('.return')
    .should('be.visible')
    .and('contain', 'Adicionar Novo Professor').click();

  // Adicionar Professor
  cy.get('#siape')
    .should('be.visible')
    .type('12345678');

  cy.get('#first_name')
    .should('be.visible')
    .type('Felipe')


  cy.get('#last_name')
  .should('be.visible')
  .type('Oliveira')

  cy.get('.button')
    .should('be.visible')
    .and('contain', 'Adicionar').click();

  });

  it('Editar Professor', () =>{
    cy.get('ul').should('be.visible');

    cy.contains('li', 'Bruno Sampaio - 1234567')
      .find('a')
      .contains('Editar')
      .click();

    cy.get('#siape')
      .clear()
      .type('7654321');

    // Clica no botão de salvar
    cy.get('.button')
      .contains('Salvar')
      .click();

    // Verifica se o SIAPE foi atualizado na lista
    cy.contains('Bruno Sampaio - 7654321').should('exist');
    cy.contains('Bruno Sampaio - 1234567').should('not.exist');
  });

  it('Excluir Professor', () =>{
    cy.get('ul').should('be.visible');

    cy.contains('li', 'Felipe Oliveira - 12345678')
      .find('a')
      .contains('Excluir')
      .click();

    cy.get('button')
    .contains('Confirmar Exclusão')
    .click();

    // Verifica se o professor foi excluido na lista
    cy.contains('Felipe Oliveira - 12345678').should('not.exist');
  });

})

