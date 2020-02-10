const registerForm = require('../support/utils/forms/register')
const mockRoute = require('../support/utils/server')

describe('register page', function () {
  beforeEach(function () {
    cy.visit('/register')
  })

  it('should display form validation errors', function () {
    registerForm.submitEmptyForm()
    cy.contains('email is a required field')
    cy.contains('password is a required field')
  })

  it('should handle errors', function () {
    cy.server()
    mockRoute('/users', 409, 'POST')

    registerForm.submitFilledForm()
    cy.contains('User already exists.')
  })

  it('should create new user and log in', function () {
    cy.server()
    mockRoute('/users', 200, 'POST')

    registerForm.submitFilledForm()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
})
