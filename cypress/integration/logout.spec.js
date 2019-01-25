const mockRoute = require('../support/utils/server')
const { logUserIn } = require('../support/utils/auth')

describe('logout page', function () {
  it('should logout user unauthorized users', function () {
    logUserIn()

    cy.server()
    mockRoute('/secured', 200)

    cy.visit('/logout')
    cy.url().should('eq', Cypress.config().baseUrl + '/login')
  })
})
