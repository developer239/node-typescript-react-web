const mockRoute = require('../support/utils/server')
const { logUserIn } = require('../support/utils/auth')

describe('refresh token', function () {
  it('should handle valid refresh token', function () {
    logUserIn()

    cy.server()
    mockRoute('/session/token', 200, 'POST')
    mockRoute('/secured', 401, 'GET', { delay: 500 }) // We want to delay this request so that we have time to visit / and replace status 401 with 200

    cy.visit('/')

    cy.wait(250)
    mockRoute('/secured', 200, 'GET')

    cy.contains('Node Typescript API 🌍 [secured resource]')
  })

  it('should handle invalid refresh token', function () {
    logUserIn()

    cy.server()
    mockRoute('/session/token', 401, 'POST')
    mockRoute('/secured', 401, 'GET', { delay: 500 })

    cy.visit('/')
    cy.url().should('eq', Cypress.config().baseUrl + '/login')
  })
})
