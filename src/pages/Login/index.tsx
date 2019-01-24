import React, { FC, useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import LoginForm from 'src/modules/auth/forms/Login'
import { IFormValues } from 'src/modules/auth/forms/Login/types'
import AuthContext from 'src/modules/auth/context'
import useFetcher from 'src/hooks/useFetcher'
import authApi from 'src/modules/auth/api'
import previousLocation from 'src/utils/previousLocation'

const LoginPage: FC<RouteComponentProps> = props => {
  const authContext = useContext(AuthContext)
  const [postData] = useFetcher()

  const handleSubmit = async (values: IFormValues) => {
    const response = await postData(authApi.login, values)
    if (!response.error) {
      const targetPath = previousLocation(props)
      authContext.actions.login(response.data)
      props.history.push(targetPath)
    }
  }

  return <LoginForm submit={handleSubmit} />
}

export default LoginPage
