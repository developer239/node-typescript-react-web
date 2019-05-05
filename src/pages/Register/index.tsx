import React, { FC, useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import RegisterForm from 'modules/auth/forms/Register'
import { IFormValues } from 'modules/auth/forms/Register/types'
import AuthContext from 'modules/auth/context'
import useFetcher from 'hooks/useFetcher'
import authApi from 'modules/auth/api'

const RegisterPage: FC<RouteComponentProps> = props => {
  const authContext = useContext(AuthContext)
  const [postData] = useFetcher()

  const handleSubmit = async (values: IFormValues) => {
    const response = await postData(authApi.register, values)
    if (!response.error) {
      authContext.actions.login(response.data)
      props.history.push('/')
    }
  }

  return <RegisterForm submit={handleSubmit} />
}

export default RegisterPage
