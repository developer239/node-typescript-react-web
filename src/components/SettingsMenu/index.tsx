import React from 'react'
import Menu from '../Menu'

const SETTINGS_MENU_LINKS = [
  { id: 1, to: '/settings/account', label: 'Account Info' },
]

const SettingsMenu = () => <Menu links={SETTINGS_MENU_LINKS} />

export default SettingsMenu
