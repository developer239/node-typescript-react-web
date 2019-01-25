const createUser200 = () => {
  cy.route({
    method: 'POST',
    url: '/users',
    status: 200,
    response: {
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
      email: 'test@email.com'
    }
  })
}

const createUser409 = () => {
  cy.route({
    method: 'POST',
    url: '/users',
    status: 409,
    response: {
      message: 'User already exists.',
    }
  })
}

module.exports = {
  createUser200,
  createUser409,
}
