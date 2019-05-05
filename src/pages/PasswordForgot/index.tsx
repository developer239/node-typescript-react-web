import React, { FC, useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import PasswordForgot from 'modules/auth/forms/PasswordForgot'
import { IFormValues } from 'modules/auth/forms/PasswordForgot/types'
import FLashMessagesContext from 'modules/flash/context'
import useFetcher from 'hooks/useFetcher'
import authApi from 'modules/auth/api'

const PasswordForgotPage: FC<RouteComponentProps> = () => {
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

  return <PasswordForgot submit={handleSubmit} />
}

export default PasswordForgotPage
