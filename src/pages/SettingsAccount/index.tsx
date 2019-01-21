import React, { useContext } from 'react'
import UserInfoForm from 'src/modules/settings/forms/User'
import FLashMessagesContext from 'src/modules/flash/context'
import useFetcher from 'src/hooks/useFetcher'
import AuthContext from 'src/modules/auth/context'
import SettingsMenu from 'src/components/SettingsMenu'
import wait from 'src/common/wait'

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
    <div className="row">
      <div className="col-md-3 col-sm-12">
        <SettingsMenu />
      </div>
      <div className="col-md-9 col-sm-12">
        <UserInfoForm
          user={authContext.state.user!}
          submit={handleSubmitUserInfo}
        />
      </div>
    </div>
  )
}

export default SettingsPage
