import React, { FC, useContext, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { PasswordResetForm } from 'modules/auth/forms/PasswordReset'
import { IFormValues } from 'modules/auth/forms/PasswordReset/types'
import { AuthContext } from 'modules/auth/context'
import { FlashMessagesContext } from 'modules/flash/context'
import { useFetcher } from 'hooks/useFetcher'
import * as authApi from 'modules/auth/api'
import { searchParams } from 'utils'

export const PasswordResetPage: FC<RouteComponentProps> = ({
  history: { push },
  location: { search },
}) => {
  const authContext = useContext(AuthContext)
  const flashContext = useContext(FlashMessagesContext)
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

  return <PasswordResetForm token={token} submit={handleSubmit} />
}
