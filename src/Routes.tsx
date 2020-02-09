import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Main } from 'components/Main'
import { ProtectedRoute } from 'modules/router/ProtectedRoute'
import { LogoutRoute } from 'modules/router/LogoutRoute'
import { HomePage } from 'pages/Home'
import { NotFoundPage } from 'pages/NotFound'
import { LoginPage } from 'pages/Login'
import { RegisterPage } from 'pages/Register'
import { PasswordForgotPage } from 'pages/PasswordForgot'
import { PasswordResetPage } from 'pages/PasswordReset'
import { AboutPage } from 'pages/About'
import { TermsOfUsePage } from 'pages/TermsOfUse'
import { SettingsPage } from 'pages/SettingsAccount'

export const Routes = () => (
  <Main>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <LogoutRoute exact path="/logout" />
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute
        exact
        path="/settings/account"
        component={SettingsPage}
      />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/password-forgot" component={PasswordForgotPage} />
      <Route exact path="/password-reset" component={PasswordResetPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/terms-of-use" component={TermsOfUsePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Main>
)
