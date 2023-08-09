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
  beforeEach(() => {
    cy.viewport(400, 800);
    cy.mount(<FTDTransactionsButton/>)
  })

  it('Check button clicks', () => {
    cy.get('.transparent').click();
  });

  it('Check button text', () => {
    cy.get('.transparent').should('have.text','Fund Transfer Dispute Transactions')
  });

})