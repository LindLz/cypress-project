describe('Services Page Test', () => {
  it('should get the number of table rows', () => {
      cy.visit('https://parabank.parasoft.com/parabank/services.htm');
      cy.get('table > tbody > tr').its('length').as('rowCount');
      cy.get('@rowCount').then(count => {
          cy.log(`The page has ${count} rows`);
      });
  });
});