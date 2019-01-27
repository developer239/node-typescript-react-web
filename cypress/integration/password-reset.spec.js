const passwordResetForm = require('../support/utils/forms/passwordReset')
const mockRoute = require('../support/utils/server')

describe('password reset page', function () {
  it('should handle missing token', function () {
    cy.visit('/password-reset')
    cy.contains('Invalid password reset token.')
  })

  it('should handle errors', function () {
    cy.visit('/password-reset?token=someFakeToken')
    passwordResetForm.submitEmptyForm()
    cy.contains('password is a required field')
  })

  it('should handle invalid token', function () {
    cy.visit('/password-reset?token=someFakeToken')

    cy.server()
    mockRoute('/session/password-reset', 404, 'POST')

    passwordResetForm.submitFilledForm()
    cy.contains('Password Reset Token Not Found')
  })

  it('should reset password and log user in', function () {
    cy.visit('/password-reset?token=someFakeToken')

    cy.server()
    mockRoute('/session/password-reset', 200, 'POST')
    mockRoute('/secured', 200, 'GET')

    passwordResetForm.submitFilledForm()
    cy.contains('Password was successfully reset.')
    cy.contains('You are now logged in.')
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
})
