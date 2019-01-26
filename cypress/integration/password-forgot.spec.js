const passwordForgotForm = require('../support/utils/forms/passwordForgot')
const mockRoute = require('../support/utils/server')

describe('password forgot page', function () {
  beforeEach(function () {
    cy.visit('/password-forgot')
  })

  it('should display form validation errors', function () {
    passwordForgotForm.submitEmptyForm()
    cy.contains('email is a required field')
  })

  it('should handle errors', function () {
    cy.server()
    mockRoute('/session/password-forgot', 404, 'POST')

    passwordForgotForm.submitFilledForm()
    cy.contains('User does not exist')
  })

  it('should trigger password reset', function () {
    cy.server()
    mockRoute('/session/password-forgot', 200, 'POST')

    passwordForgotForm.submitFilledForm()
    cy.contains('We sent password recovery link to test@emai.com')
  })
})
