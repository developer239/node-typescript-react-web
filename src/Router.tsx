import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from 'src/components/Main'
import ProtectedRoute from 'src/modules/router/ProtectedRoute'
import LogoutRoute from 'src/modules/router/LogoutRoute'
import Home from 'src/pages/Home'
import NotFound from 'src/pages/NotFound'
import Login from 'src/pages/Login'
import Register from 'src/pages/Register'
import PasswordForgot from 'src/pages/PasswordForgot'
import PasswordReset from 'src/pages/PasswordReset'
import About from 'src/pages/About'
import TermsOfUse from 'src/pages/TermsOfUse'
import SettingsAccount from 'src/pages/SettingsAccount'

const Router = () => (
  <Main>
    <Switch>
      <Route exact path="/login" component={Login} />
      <LogoutRoute exact path="/logout" />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/settings/account" component={SettingsAccount} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/password-forgot" component={PasswordForgot} />
      <Route exact path="/password-reset" component={PasswordReset} />
      <Route exact path="/about" component={About} />
      <Route exact path="/terms-of-use" component={TermsOfUse} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Main>
)

export default Router
