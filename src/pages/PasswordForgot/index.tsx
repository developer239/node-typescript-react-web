import React, { FC, useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import PasswordForgot from 'src/modules/auth/forms/PasswordForgot'
import { IFormValues } from 'src/modules/auth/forms/PasswordForgot/types'
import FLashMessagesContext from 'src/modules/flash/context'
import useFetcher from 'src/hooks/useFetcher'
import authApi from 'src/modules/auth/api'

const PasswordForgotPage: FC<RouteComponentProps> = () => {
  const flashContext = useContext(FLashMessagesContext)
  const [loadData] = useFetcher()

  const handleSubmit = async (values: IFormValues) =>
    loadData(async () => {
      await authApi.passwordForgot(values)
      flashContext.actions.showInfo(`We sent password recovery link to ${values.email}`)
    })

  return <PasswordForgot submit={handleSubmit} />
}

export default PasswordForgotPage
