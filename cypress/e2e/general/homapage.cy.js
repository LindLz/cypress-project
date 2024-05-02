describe('Home Page Test', () => {
  it('should load the Home Page and perform tests', () => {
    // Visit the home page
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    // Test that the page title is correct
    cy.title().should('eq', 'ParaBank | Welcome | Online Banking');

    // Test that the header contains the correct text
    //cy.get('h1').should('contain', 'ParaBank');

    // Test that the login form is present
    cy.get('#loginPanel').should('exist');

    // Test that the registration link is present
    cy.contains('Register').should('exist');

    // Test that the footer is present
    //cy.get('footer').should('exist');

    // Add additional test cases as needed
  });
});
