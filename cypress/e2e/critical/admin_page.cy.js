describe('Admin Page Test', () => {
  it('should perform actions on Admin Page', () => {
    cy.visit('https://parabank.parasoft.com/parabank/admin.htm');

    cy.contains('button', 'INIT').click();

    cy.get('#accessMode1').check().should('be.checked');

    cy.get('#loanProvider').select('ws');

    cy.get('#adminForm').within(() => {
      cy.get('input[type="submit"]').click();
    });

    cy.contains('Settings saved successfully').should('be.visible');
  });
});
