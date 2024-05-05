import registrationPage from '../pom/registration';
const { faker } = require('@faker-js/faker');

describe('Registration, Login, and Logout Test', () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const registrationUsername = faker.internet.userName();
  const registrationPassword = faker.internet.password();
  const loginUsername = faker.internet.userName();
  const loginPassword = faker.internet.password();

  beforeEach(() => {
    registrationPage.visit();
  });

  it('should fail to login with false credentials', () => {
    registrationPage.fillLoginForm(loginUsername, loginPassword);
    registrationPage.submitLoginForm();
    registrationPage.verifyLoginError();
  });

  it('should register a new account', () => {
    registrationPage.fillRegistrationForm(
      firstName,
      lastName,
      '123 Main Street',
      'Anytown',
      'CA',
      '12345',
      '1234567890',
      '123-45-6789',
      registrationUsername,
      registrationPassword
    );
    registrationPage.submitRegistrationForm();
    registrationPage.verifyRegistrationSuccess();
  });

  it('should log in and log out', () => {
    registrationPage.fillLoginForm(registrationUsername, registrationPassword);
    registrationPage.submitLoginForm();
    registrationPage.verifyLoginSuccess();
    registrationPage.logout();
  });

  it('should fail to register with existing credentials', () => {
    registrationPage.fillRegistrationForm(
      firstName,
      lastName,
      '123 Main Street',
      'Anytown',
      'CA',
      '12345',
      '1234567890',
      '123-45-6789',
      registrationUsername,
      registrationPassword
    );
    registrationPage.submitRegistrationForm();
    registrationPage.verifyUsernameExistsError();
  });
});
