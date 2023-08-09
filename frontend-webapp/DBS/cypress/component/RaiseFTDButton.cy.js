import RaiseFTDButton from "../../src/components/widgets/RaiseFTDButton"

describe('RaiseFTDButton.cy.js', () => {
  beforeEach(() => {
    cy.mount(<RaiseFTDButton/>)
  })

  it('checks that the correct text is displayed', () => {
    cy.get('.RaiseFTDButton').should('have.text', 'RAISE FUND TRANSFER DISPUTE')
  })

  it('checks the color of the button', () => {
    cy.get('.RaiseFTDButton').should('have.css', 'background-color', 'rgb(29, 12, 134)');
  });
})