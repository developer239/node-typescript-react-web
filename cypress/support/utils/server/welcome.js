const mockSecured200 = () => {
  cy.route('GET', '/secured', { message: 'Node Typescript API 🌍 [secured resource]'})
}

module.exports = {
  mockSecured200,
}
