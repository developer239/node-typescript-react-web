const { cond } = require('ramda')

const switchHelper = (actualUrl, actualStatus, actualMethod) =>
  ({ url, status, method }) =>
    url === actualUrl && status === actualStatus && method === actualMethod

const mockResponse = response =>
  ({ url, status, method, config }) => {
    cy.route({
      method,
      url,
      status,
      response,
      ...config,
    })
  }

const mockRoute = (url, status, method) => response => [
  switchHelper(url, status, method),
  mockResponse(response)
]

const mockRouter = (url, status, method, config) => cond([

  // Welcome Controller
  mockRoute('/secured', 200, 'GET')({
    message: 'Node Typescript API 🌍 [secured resource]'
  }),
  mockRoute('/secured', 401, 'GET')({
    message: 'Invalid credentials'
  }),

  // Users Controller
  mockRoute('/users', 200, 'POST')({
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    email: 'test@email.com'
  }),
  mockRoute('/users', 409, 'POST')({
    message: 'User already exists.',
  }),

  // Session Controller
  // POST /session/user
  mockRoute('/session/user', 200, 'POST')({
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    email: 'test@email.com'
  }),
  mockRoute('/session/user', 401, 'POST')({
    message: 'Invalid credentials',
  }),

  // POST /session/password-forgot
  mockRoute('/session/password-forgot', 200, 'POST')({
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    email: 'test@email.com'
  }),
  mockRoute('/session/password-forgot', 404, 'POST')({
    message: 'User does not exist',
  }),

  // POST /session/password-reset
  mockRoute('/session/password-reset', 200, 'POST')({
    user: {
      id: 1,
      email: 'test@emai.com',
    },
  }),
  mockRoute('/session/password-reset', 404, 'POST')({
    message: 'Password Reset Token Not Found',
  }),

  // POST /session/token
  mockRoute('/session/token', 200, 'POST')({
    token: 'newToken',
  }),
  mockRoute('/session/token', 401, 'POST')({
    message: 'Invalid credentials',
  }),

])({
  url,
  status,
  method,
  config,
})

module.exports = mockRouter
