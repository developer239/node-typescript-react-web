const submitEmptyForm = () => {
  cy.get('button[type=submit]').click()
}

const submitFilledForm = () => {
  cy.get('#email').type('test@emai.com')
  cy.get('#password').type('somePassword')
  cy.get('button[type=submit]').click()
}

module.exports = {
  submitEmptyForm,
  submitFilledForm,
}
