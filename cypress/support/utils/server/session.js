const mockSessionUser200 = () => {
  cy.route({
    method: 'POST',
    url: '/session/user',
    status: 200,
    response: {
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
      email: 'test@email.com'
    }
  })
}

const mockSessionUser401 = () => {
  cy.route({
    method: 'POST',
    url: '/session/user',
    status: 401,
    response: {
      message: 'Invalid credentials',
    }
  })
}

const mockSessionPasswordForgot200 = () => {
  cy.route({
    method: 'POST',
    url: '/session/password-forgot',
    status: 200,
    response: {
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
      email: 'test@email.com'
    }
  })
}

const mockSessionPasswordForgot404 = () => {
  cy.route({
    method: 'POST',
    url: '/session/password-forgot',
    status: 404,
    response: {
      message: 'User does not exist',
    }
  })
}


const mockSessionPasswordReset200 = () => {
  cy.route({
    method: 'POST',
    url: '/session/password-reset',
    status: 200,
    response: {
      user: {
        id: 1,
        email: 'test@emai.com',
      },
    }
  })
}

const mockSessionPasswordReset400 = () => {
  cy.route({
    method: 'POST',
    url: '/session/password-reset',
    status: 404,
    response: {
      message: 'Password reset token is not valid.',
    }
  })
}

module.exports = {
  mockSessionUser200,
  mockSessionUser401,
  mockSessionPasswordForgot200,
  mockSessionPasswordForgot404,
  mockSessionPasswordReset200,
  mockSessionPasswordReset400
}
