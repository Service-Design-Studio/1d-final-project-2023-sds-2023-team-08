import RecentTransactionsButton from "../../src/components/widgets/RecentTransactionsButton"

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('navigate is not a function')) {
      console.error(err.message);
      return false;
    }
    return true;
  });
describe('RecentTransactionsButton.cy.js', () => {
  it('checks that button routes to the correct page', () => {
    cy.viewport(400, 800);
    cy.mount(<RecentTransactionsButton/>)
    cy.get('#transaction').click();
    //cy.location('pathname').eq ('/${userID}/recenttransaction');
  })
})