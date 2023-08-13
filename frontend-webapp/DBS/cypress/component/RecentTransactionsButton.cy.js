import React from 'react';
import RecentTransactionsButton from "../../src/components/widgets/RecentTransactionsButton"

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('navigate is not a function')) {
      console.error(err.message);
      return false;
    }
    return true;
  });

describe('RecentTransactionsButton.cy.js', () => {
  beforeEach(() => {
    cy.viewport(400, 800);
    cy.mount(<RecentTransactionsButton/>)
  });

  it('Check button clicks', () => {
    cy.get('.transparent').click();
  });

  it('Check button text', () => {
    cy.get('.transparent').should('have.text','Recent Transactions')
  });

})