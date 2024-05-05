describe('Home Page Test', () => {
  it('should load the Home Page and perform tests', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    cy.title().should('eq', 'ParaBank | Welcome | Online Banking');

    cy.get('img[title="ParaBank"]').should('exist');

    cy.get('#loginPanel').should('exist');

    cy.contains('Register').should('exist');
  });
});
