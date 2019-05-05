import React, { FunctionComponent, ComponentType, useContext } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import AuthContext from 'modules/auth/context'

interface IOuterProps {
  component: ComponentType
}

type IProps = IOuterProps & RouteProps

const ProtectedRoute: FunctionComponent<IProps> = ({
  component: TargetComponent,
  ...rest
}) => {
  const {
    state: { user },
  } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={props => {
        if (user) {
          return <TargetComponent {...props} />
        }
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }}
    />
  )
}

export default ProtectedRoute
