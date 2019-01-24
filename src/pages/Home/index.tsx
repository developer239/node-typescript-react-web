import React from 'react'
import ErrorBoundary from 'src/experimental/ErrorBoundary'
import { requestSecuredResource } from 'src/modules/welcomeModule/cache'

const Welcome = () => {
  const welcome = requestSecuredResource()
  return <p>{welcome.data.message}</p>
}

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <ErrorBoundary>
      <Welcome />
    </ErrorBoundary>
  </div>
)

export default HomePage
