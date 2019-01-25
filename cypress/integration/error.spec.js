describe('error page', function () {
  it('should show 404', function () {
    cy.visit('/this-route-does-not-exist')
    cy.contains('Not Found 404')
  })
})
