const mockRoute = require('../support/utils/server')
const { logUserIn } = require('../support/utils/auth')

describe('home page', function () {
  it('should handle unauthorized users', function () {
    cy.visit('/')
    cy.url().should('eq', Cypress.config().baseUrl + '/login')
  })

  it('should handle authorized users', function () {
    logUserIn()

    cy.server()
    mockRoute('/secured', 200, 'GET')

    cy.visit('/')
    cy.contains('Node Typescript API 🌍 [secured resource]')
  })
})
