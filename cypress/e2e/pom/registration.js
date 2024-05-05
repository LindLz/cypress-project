class RegistrationPage {
  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
  }

  fillRegistrationForm(firstName, lastName, street, city, state, zipCode, phoneNumber, ssn, username, password) {
    cy.get('#customer\\.firstName').type(firstName);
    cy.get('#customer\\.lastName').type(lastName);
    cy.get('#customer\\.address\\.street').type(street);
    cy.get('#customer\\.address\\.city').type(city);
    cy.get('#customer\\.address\\.state').type(state);
    cy.get('#customer\\.address\\.zipCode').type(zipCode);
    cy.get('#customer\\.phoneNumber').type(phoneNumber);
    cy.get('#customer\\.ssn').type(ssn);
    cy.get('#customer\\.username').type(username);
    cy.get('#customer\\.password').type(password);
    cy.get('#repeatedPassword').type(password);
  }

  submitRegistrationForm() {
    cy.get('#customerForm input[type="submit"]').click();
  }

  verifyRegistrationSuccess() {
    cy.contains('Your account was created successfully.').should('exist');
  }

  verifyUsernameExistsError() {
    cy.contains('This username already exists.').should('exist');
  }

  fillLoginForm(username, password) {
    cy.get('#loginPanel input[name="username"]').type(username);
    cy.get('#loginPanel input[name="password"]').type(password);
  }

  submitLoginForm() {
    cy.get('#loginPanel input[type="submit"]').click();
  }

  verifyLoginSuccess() {
    cy.contains('Welcome').should('exist');
  }

  logout() {
    cy.contains('a', 'Log Out').click();
  }

  verifyLoginError() {
    cy.contains('Error').should('exist');
  }
}

export default new RegistrationPage();
