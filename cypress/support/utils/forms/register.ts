const submitEmptyForm = () => {
  cy.get('button[type=submit]').click()
}

const submitFilledForm = () => {
  cy.fixture('user').then((user) => {
    cy.get('#email').type(user.email)
    cy.get('#password').type(user.password)
    cy.get('button[type=submit]').click()
  })
}

module.exports = {
  submitEmptyForm,
  submitFilledForm,
}
