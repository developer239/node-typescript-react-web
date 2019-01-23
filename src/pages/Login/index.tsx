import React, { FC, useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { path } from 'ramda'
import LoginForm from 'src/modules/auth/forms/Login'
import { IFormValues } from 'src/modules/auth/forms/Login/types'
import AuthContext from 'src/modules/auth/context'
import useFetcher from 'src/hooks/useFetcher'
import authApi from 'src/modules/auth/api'

const LoginPage: FC<RouteComponentProps> = props => {
  const authContext = useContext(AuthContext)
  const [loadData] = useFetcher()

  const handleSubmit = async (values: IFormValues) =>
    loadData(async () => {
      const targetPath = path(['location', 'state', 'from', 'pathname'], props) || '/'
      const response = await authApi.login(values)
      authContext.actions.login(response.data)
      props.history.push(targetPath)
    })

  return <LoginForm submit={handleSubmit} />
}

export default LoginPage
