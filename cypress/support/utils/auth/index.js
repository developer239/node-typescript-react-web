const Cookie = require('js-cookie')

const logUserIn = () =>
  Cookie.set('user', JSON.stringify({ email: 'test@email.com' }))


module.exports = {
  logUserIn
}
