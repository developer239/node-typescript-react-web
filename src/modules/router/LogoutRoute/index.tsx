import React, { FunctionComponent, useContext, useEffect } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import AuthContext from 'modules/auth/context'

const LogoutRoute: FunctionComponent<RouteProps> = routeProps => {
  const {
    actions: { logout },
  } = useContext(AuthContext)
  useEffect(() => {
    logout()
  }, [])

  return (
    <Route
      {...routeProps}
      render={() => <Redirect to={{ pathname: '/login' }} />}
    />
  )
}

export default LogoutRoute
