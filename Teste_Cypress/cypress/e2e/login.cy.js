describe('template spec', () => {
  
    beforeEach(() => {
      cy.visit('localhost:8000')
    });
  
    it('Fazer login como Administrador', () => {
      // Verifica o botão para acessar como administrador
      cy.get('.loginb')
        .should('be.visible')
        .and('contain', 'Acessar como Administrador').click();
    
      // Insere os dados
      cy.get('#id_username')
        .should('be.visible')
        .type('admin');
    
      cy.get('#id_password')
        .should('be.visible')
        .type('admin');
    
      // Clica no botão de login
      cy.get('.buttonlogin')
        .should('be.visible')
        .and('contain', 'Entrar')
        .click();
    
      cy.url().should('include', '/dashboard');
    });

    it('Fazer logout como Administrador', () => {
        // Verifica o botão para acessar como administrador
        cy.get('.loginb')
          .should('be.visible')
          .and('contain', 'Acessar como Administrador').click();
      
        // Insere os dados
        cy.get('#id_username')
          .should('be.visible')
          .type('admin');
      
        cy.get('#id_password')
          .should('be.visible')
          .type('admin');
      
        // Clica no botão de login
        cy.get('.buttonlogin')
          .should('be.visible')
          .and('contain', 'Entrar')
          .click();
      
        cy.get('.login > a')
            .should('be.visible')
            .and('contain','Sair')
            .click();

          cy.url().should('include', '/login');
      });

})