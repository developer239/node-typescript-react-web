const submitEmptyForm = () => {
  cy.get('button[type=submit]').click()
}

const submitFilledForm = () => {
  cy.get('#password').type('newPassword')
  cy.get('button[type=submit]').click()
}

module.exports = {
  submitEmptyForm,
  submitFilledForm,
}
