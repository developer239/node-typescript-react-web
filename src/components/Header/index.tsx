import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from 'modules/auth/context'

export const Header = () => {
  const {
    state: { user },
  } = useContext(AuthContext)

  if (!user) {
    return null
  }

  return (
    <header>
      <Link className="button" to="/">
        Home
      </Link>
      <Link className="button" to="/settings/account">
        Settings
      </Link>
      <Link className="button" to="/logout">
        Logout
      </Link>
    </header>
  )
}
