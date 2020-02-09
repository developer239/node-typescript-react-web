import React, { FC, useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { PasswordForgotForm } from 'modules/auth/forms/PasswordForgot'
import { IFormValues } from 'modules/auth/forms/PasswordForgot/types'
import { FLashMessagesContext } from 'modules/flash/context'
import { useFetcher } from 'hooks/useFetcher'
import * as authApi from 'modules/auth/api'

export const PasswordForgotPage: FC<RouteComponentProps> = () => {
  const flashContext = useContext(FLashMessagesContext)
  const [postData] = useFetcher()

  const handleSubmit = async (values: IFormValues) => {
    const response = await postData(authApi.passwordForgot, values)
    if (!response.error) {
      flashContext.actions.showInfo(
        `We sent password recovery link to ${values.email}`
      )
    }
  }

  return <PasswordForgotForm submit={handleSubmit} />
}
