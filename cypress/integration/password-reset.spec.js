const passwordResetForm = require('../support/utils/forms/passwordReset')
const mockRoute = require('../support/utils/server')

describe('password forgot page', function () {
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
    mockRoute('/session/password-reset', 400)
    passwordResetForm.submitFilledForm()
    cy.contains('Password reset token is not valid.')
  })

  it('should reset password and log user in', function () {
    cy.visit('/password-reset?token=someFakeToken')
    cy.server()
    mockRoute('/session/password-reset', 200)
    mockRoute('/secured', 200)
    passwordResetForm.submitFilledForm()
    cy.contains('Password was successfully reset.')
    cy.contains('You are now logged in.')
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
})