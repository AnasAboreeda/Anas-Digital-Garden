describe("Sanity tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000/").get("body")
  })


  // it has a title
  it("Has a title", () => {
    cy.title().should("include", "Digital Garden")
    cy.get("h1").should("contain", "Digital Garden")

  })
})
