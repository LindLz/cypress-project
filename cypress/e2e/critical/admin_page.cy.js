describe('Admin Page Test', () => {
  it('should perform actions on Admin Page', () => {
    // Visit the Admin Page
    cy.visit('https://parabank.parasoft.com/parabank/admin.htm');

    // Click the button
    cy.contains('button', 'INIT').click();

    // Select a radio button
    cy.get('#accessMode1').check().should('be.checked');

    // Choose an option from the drop-down
    cy.get('#loanProvider').select('ws');

    // Click on submit button
    cy.get('#adminForm').within(() => {
      cy.get('input[type="submit"]').click();
    });

    // Assertion to check if the text appears on the screen
    cy.contains('Settings saved successfully').should('be.visible');
  });
});
