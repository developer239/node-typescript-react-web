const mockRoute = require('../support/utils/server')
const { logUserIn } = require('../support/utils/auth')

describe('logout page', function () {
  it('should logout user', function () {
    logUserIn()

    cy.server()
    mockRoute('/secured', 200, 'POST')

    cy.visit('/logout')
    cy.url().should('eq', Cypress.config().baseUrl + '/login')
  })
})
