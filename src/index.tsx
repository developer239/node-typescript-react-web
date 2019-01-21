import React, { ComponentType } from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import App from 'src/App'
import { FlashMessagesProvider } from 'src/modules/flash/context'
import { AuthProvider } from 'src/modules/auth/context'
import './styles.css'

const $root = document.getElementById('root')

export const history = createBrowserHistory()

const renderApp = (Component: ComponentType) => {
  ReactDOM.render(
    <Router history={history}>
      <AuthProvider>
        <FlashMessagesProvider>
          <Component />
        </FlashMessagesProvider>
      </AuthProvider>
    </Router>,
    $root
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('src/App', () => {
    const NextApp = require('src/App').default
    renderApp(NextApp)
  })
}
