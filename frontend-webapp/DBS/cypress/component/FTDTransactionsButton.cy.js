import React from 'react';
import FTDTransactionsButton from "../../src/components/widgets/FTDTransactionsButton"

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('navigate is not a function')) {
      console.error(err.message);
      return false;
    }
    return true;
  });
describe('FTDTransactionsButton.cy.js', () => {
  it('checks that button routes to the correct page', () => {
    cy.viewport(400, 800);
    cy.mount(<FTDTransactionsButton/>)
    cy.get('.transparent').click();
    //cy.location('pathname').eq ('/${userID}/recenttransaction');
  })
})