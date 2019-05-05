import React, { useContext } from 'react'
import UserInfoForm from 'modules/settings/forms/User'
import FLashMessagesContext from 'modules/flash/context'
import useFetcher from 'hooks/useFetcher'
import AuthContext from 'modules/auth/context'
import SettingsMenu from 'components/SettingsMenu'
import { Row, Column } from 'components/Grid'
import wait from 'utils/wait'

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
