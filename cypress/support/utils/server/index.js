const { cond, equals } = require('ramda')
const { mockSecured200 } = require('./welcome')
const {
  mockSessionUser401,
  mockSessionUser200,
  mockSessionPasswordForgot200,
  mockSessionPasswordForgot404,
  mockSessionPasswordReset200,
  mockSessionPasswordReset400,
} = require('./session')
const { createUser200, createUser409 } = require('./users')

const mockRoute = (uri,
  status = 0) =>
  cond([
    [
      equals('/secured'),
      () => cond([
        [equals(200), mockSecured200],
      ])(status)
    ],
    [
      equals('/users'),
      () => cond([
        [equals(200), createUser200],
        [equals(409), createUser409],
      ])(status)
    ],
    [
      equals('/session/user'),
      () => cond([
        [equals(200), mockSessionUser200],
        [equals(401), mockSessionUser401],
      ])(status)
    ],
    [
      equals('/session/password-reset'),
      () => cond([
        [equals(200), mockSessionPasswordReset200],
        [equals(400), mockSessionPasswordReset400],
      ])(status)
    ],
    [
      equals('/session/password-forgot'),
      () => cond([
        [equals(200), mockSessionPasswordForgot200],
        [equals(404), mockSessionPasswordForgot404],
      ])(status)
    ],
  ])(uri)

module.exports = mockRoute
