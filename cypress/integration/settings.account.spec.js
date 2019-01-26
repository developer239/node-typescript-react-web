const mockRoute = require('../support/utils/server')
const { logUserIn } = require('../support/utils/auth')

describe('account settings page', function () {
  it('should handle unauthorized users', function () {
    cy.visit('/settings/account')
    cy.url().should('eq', Cypress.config().baseUrl + '/login')
  })

  it('should display user info', function () {
    logUserIn()

    cy.server()
    mockRoute('/secured', 200, 'GET')

    cy.visit('/settings/account')
    cy.get('#email').should('have.value', 'test@email.com')
  })
})
