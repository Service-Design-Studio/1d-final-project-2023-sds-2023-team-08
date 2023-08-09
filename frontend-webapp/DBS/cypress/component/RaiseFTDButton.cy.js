import RaiseFTDButton from "../../src/components/widgets/RaiseFTDButton"

describe('RaiseFTDButton.cy.js', () => {
  it('checks that the correct text is displayed', () => {
    cy.mount(<RaiseFTDButton/>)
  })
})