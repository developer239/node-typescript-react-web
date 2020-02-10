const submitEmptyForm = () => {
  cy.get('button[type=submit]').click()
}

const submitFilledForm = () => {
  cy.fixture('user').then((user) => {
    cy.get('#email').type(user.email)
    cy.get('button[type=submit]').click()
  })
}

module.exports = {
  submitEmptyForm,
  submitFilledForm,
}
