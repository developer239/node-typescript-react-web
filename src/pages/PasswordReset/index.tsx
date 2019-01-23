import React, { FC, useContext, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import PasswordReset from 'src/modules/auth/forms/PasswordReset'
import { IFormValues } from 'src/modules/auth/forms/PasswordReset/types'
import AuthContext from 'src/modules/auth/context'
import FLashMessagesContext from 'src/modules/flash/context'
import useFetcher from 'src/hooks/useFetcher'
import authApi from 'src/modules/auth/api'
import { searchParams } from 'src/utils'

const PasswordResetPage: FC<RouteComponentProps> = ({
  history: { push },
  location: { search },
}) => {
  const authContext = useContext(AuthContext)
  const flashContext = useContext(FLashMessagesContext)
  const [loadData] = useFetcher()

  const token = searchParams('token', search)

  useEffect(() => {
    if (!token) {
      flashContext.actions.showError('Invalid password reset token.')
    }
  }, [])

  const handleSubmit = async (values: IFormValues) =>
    loadData(async () => {
      const response = await authApi.passwordReset(values)
      authContext.actions.login(response.data)
      flashContext.actions.showSuccess('Password was successfully reset.')
      flashContext.actions.showInfo('You are now logged in.')
      push('/')
    })

  if (!token) {
    return null
  }

  return <PasswordReset token={token} submit={handleSubmit} />
}

export default PasswordResetPage
