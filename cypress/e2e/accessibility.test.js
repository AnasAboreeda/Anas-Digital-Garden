describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000/").get("body")
    cy.injectAxe()
  })

  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })

  it("Navigates to page 2 and checks for accessibility violations", () => {
    cy.visit("/algorithms/all-you-need-to-know-about-algorithms-complexity-analysis-and-big-o")
      .checkA11y()
  })
})
