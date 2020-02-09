describe('home page', function () {
  it('should show homepage', function () {
    cy.visit('/')
    cy.contains('Hello Node Typescript React Web! 👋')
  })
})
