describe('About Us Page Test', () => {
  it('should load the About Us page and verify text visibility', () => {
    cy.visit('https://parabank.parasoft.com/parabank/about.htm');
    
    cy.contains('About Us').should('be.visible');

    cy.get('#rightPanel p').should('have.length', 3); 

    cy.contains('ParaSoft Demo Website').should('be.visible');

    cy.get('#rightPanel').contains('888-305-0041');
  });
});
