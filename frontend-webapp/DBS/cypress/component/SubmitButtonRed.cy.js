import SubmitButtonRed from "../../src/components/widgets/SubmitButtonRed"

describe('ReviewFTDSubmitButton.cy.js', () => {
    beforeEach(() => {
      cy.mount(<SubmitButtonRed/>)
    })
  
    it('checks that the correct text is displayed', () => {
      cy.get('.SubmitButtonRed').should('have.text', 'RAISE DISPUTE')
    })
  
    it('checks the color of the button', () => {
      cy.get('.SubmitButtonRed').should('have.css', 'background-color', 'rgb(165, 3, 3)');
    });

    it('check that the button clicks', () => {
      cy.get('.SubmitButtonRed').click()
    })
  })