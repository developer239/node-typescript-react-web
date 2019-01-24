import React, { FC, useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import RegisterForm from 'src/modules/auth/forms/Register'
import { IFormValues } from 'src/modules/auth/forms/Register/types'
import AuthContext from 'src/modules/auth/context'
import useFetcher from 'src/hooks/useFetcher'
import authApi from 'src/modules/auth/api'

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
