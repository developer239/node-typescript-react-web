import React, { useContext } from 'react'
import UserInfoForm from 'src/modules/settings/forms/User'
import FLashMessagesContext from 'src/modules/flash/context'
import useFetcher from 'src/hooks/useFetcher'
import AuthContext from 'src/modules/auth/context'
import SettingsMenu from 'src/components/SettingsMenu'
import { Row, Column } from 'src/components/Grid'
import wait from 'src/utils/wait'

const SettingsPage = () => {
  const flashContext = useContext(FLashMessagesContext)
  const authContext = useContext(AuthContext)
  const [loadData] = useFetcher()

  const handleSubmitUserInfo = async () =>
    loadData(async () => {
      await wait(800)
      flashContext.actions.showSuccess('There is nothing to update.')
    })

  return (
    <Row>
      <Column md={3}>
        <SettingsMenu />
      </Column>
      <Column md={9}>
        <UserInfoForm
          user={authContext.state.user!}
          submit={handleSubmitUserInfo}
        />
      </Column>
    </Row>
  )
}

export default SettingsPage
