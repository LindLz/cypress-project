describe('About Us Page Test', () => {
  it('should load the About Us page and verify text visibility', () => {
    cy.visit('https://parabank.parasoft.com/parabank/about.htm');
    
    // Assert that the page loads by checking for the presence of the About Us text
    cy.contains('About Us').should('be.visible');

    // Assert that the "ParaSoft Demo Website" text is visible
    cy.contains('ParaSoft Demo Website').should('be.visible');
  });
});
