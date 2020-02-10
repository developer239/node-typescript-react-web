const loginForm = require('../support/utils/forms/login')
const mockRoute = require('../support/utils/server')

describe('login page', function () {
  beforeEach(function () {
    cy.visit('/login')
  })

  it('should handle empty login form', function () {
    cy.server()
    mockRoute('/session/user', 401, 'POST')

    loginForm.submitEmptyForm()
    cy.contains('Invalid credentials')
  })

  it('should handle invalid credentials', function () {
    cy.server()
    mockRoute('/session/user', 401, 'POST')

    loginForm.submitFilledForm()
    cy.contains('Invalid credentials')
  })

  it('should handle valid credentials', function () {
    cy.server()
    mockRoute('/secured', 200, 'POST')
    mockRoute('/session/user', 200, 'POST')

    loginForm.submitFilledForm()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
})
