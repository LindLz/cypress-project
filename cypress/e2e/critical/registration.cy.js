const { faker } = require('@faker-js/faker');

describe('Registration and Login Test', () => {
  it('should register a new account, log out (if logged in), log in, log out, and then register again with the same credentials', () => {
    // Check if logged in and log out if necessary
    // cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    // cy.get('a').contains('Log Out').then(logoutButton => {
    //   if (logoutButton) {
    //     cy.contains('a', 'Log Out').click(); 
    //   }
    // });

    // Register a new account
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const username = faker.internet.userName();
    const password = faker.internet.password();

    // Visit the registration page
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');

    // Fill out the registration form with faker-generated data
    cy.get('#customer\\.firstName').type(firstName);
    cy.get('#customer\\.lastName').type(lastName);
    cy.get('#customer\\.address\\.street').type('123 Main Street');
    cy.get('#customer\\.address\\.city').type('Anytown');
    cy.get('#customer\\.address\\.state').type('CA');
    cy.get('#customer\\.address\\.zipCode').type('12345');
    cy.get('#customer\\.phoneNumber').type('1234567890'); // Static phone number
    cy.get('#customer\\.ssn').type('123-45-6789'); // Static SSN
    cy.get('#customer\\.username').type(username);
    cy.get('#customer\\.password').type(password);
    cy.get('#repeatedPassword').type(password);

    // Submit the registration form
    cy.get('#customerForm input[type="submit"]').click();

    // Assert that the registration was successful
    cy.contains('Your account was created successfully.').should('exist');

    // Log out
    cy.contains('a', 'Log Out').click(); 

    // Log in
    cy.get('#loginPanel input[name="username"]').type(username);
    cy.get('#loginPanel input[name="password"]').type(password);
    cy.get('#loginPanel input[type="submit"]').click();

    // Assert that login was successful
    cy.contains('Welcome').should('exist');

    // Log out again
    cy.contains('a', 'Log Out').click(); 

    // Attempt to register again with the same credentials
    // Visit the registration page
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');

    // Fill out the registration form with the same data as the first registration
    cy.get('#customer\\.firstName').clear().type(firstName);
    cy.get('#customer\\.lastName').clear().type(lastName);
    cy.get('#customer\\.address\\.street').clear().type('123 Main Street');
    cy.get('#customer\\.address\\.city').clear().type('Anytown');
    cy.get('#customer\\.address\\.state').clear().type('CA');
    cy.get('#customer\\.address\\.zipCode').clear().type('12345');
    cy.get('#customer\\.phoneNumber').clear().type('1234567890'); // Static phone number
    cy.get('#customer\\.ssn').clear().type('123-45-6789'); // Static SSN
    cy.get('#customer\\.username').clear().type(username);
    cy.get('#customer\\.password').clear().type(password);
    cy.get('#repeatedPassword').clear().type(password);

    // Submit the registration form
    cy.get('#customerForm input[type="submit"]').click();

    // Assert that the registration fails with an error message
    cy.contains('This username already exists.').should('exist');
  });
});
