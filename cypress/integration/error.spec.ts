describe('error page', () => {
  it('should show 404', () => {
    cy.visit('/this-route-does-not-exist')
    cy.contains('Not Found 404')
  })
})
