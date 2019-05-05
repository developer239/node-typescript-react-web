import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from 'components/Main'
import ProtectedRoute from 'modules/router/ProtectedRoute'
import LogoutRoute from 'modules/router/LogoutRoute'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Login from 'pages/Login'
import Register from 'pages/Register'
import PasswordForgot from 'pages/PasswordForgot'
import PasswordReset from 'pages/PasswordReset'
import About from 'pages/About'
import TermsOfUse from 'pages/TermsOfUse'
import SettingsAccount from 'pages/SettingsAccount'

const Router = () => (
  <Main>
    <Switch>
      <Route exact path="/login" component={Login} />
      <LogoutRoute exact path="/logout" />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute
        exact
        path="/settings/account"
        component={SettingsAccount}
      />
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
