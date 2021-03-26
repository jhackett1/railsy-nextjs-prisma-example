describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/posts")
  })

  it("Does not do much!", () => {
    expect(true).to.equal(true)
  })
})
