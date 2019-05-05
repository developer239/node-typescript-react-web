import React, { ComponentType } from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import App from 'App'
import { FlashMessagesProvider } from 'modules/flash/context'
import { AuthProvider } from 'modules/auth/context'
import './styles.css'

const $root = document.getElementById('root')

export const history = createBrowserHistory()

const renderApp = (Component: ComponentType) => {
  // @ts-ignore
  ReactDOM.createRoot($root).render(
    <Router history={history}>
      <AuthProvider>
        <FlashMessagesProvider>
          <Component />
        </FlashMessagesProvider>
      </AuthProvider>
    </Router>
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('App', () => {
    const NextApp = require('App').default
    renderApp(NextApp)
  })
}
