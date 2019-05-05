import React, { FC, useContext, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import PasswordReset from 'modules/auth/forms/PasswordReset'
import { IFormValues } from 'modules/auth/forms/PasswordReset/types'
import AuthContext from 'modules/auth/context'
import FLashMessagesContext from 'modules/flash/context'
import useFetcher from 'hooks/useFetcher'
import authApi from 'modules/auth/api'
import { searchParams } from 'utils'

const PasswordResetPage: FC<RouteComponentProps> = ({
  history: { push },
  location: { search },
}) => {
  const authContext = useContext(AuthContext)
  const flashContext = useContext(FLashMessagesContext)
  const [postData] = useFetcher()

  const token = searchParams('token', search)

  useEffect(() => {
    if (!token) {
      flashContext.actions.showError('Invalid password reset token.')
    }
  }, [])

  const handleSubmit = async (values: IFormValues) => {
    const response = await postData(authApi.passwordReset, values)
    if (!response.error) {
      authContext.actions.login(response.data)
      flashContext.actions.showSuccess('Password was successfully reset.')
      flashContext.actions.showInfo('You are now logged in.')
      push('/')
    }
  }

  if (!token) {
    return null
  }

  return <PasswordReset token={token} submit={handleSubmit} />
}

export default PasswordResetPage
