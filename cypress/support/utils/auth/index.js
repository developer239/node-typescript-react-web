const Cookie = require('js-cookie')

const logUserIn = () => {
  Cookie.set('user', JSON.stringify({ id: 1, email: 'test@email.com' }))
  Cookie.set('refreshToken', 'workingRefreshToken')
  Cookie.set('accessToken', 'workingAccessToken')
}

module.exports = {
  logUserIn
}
