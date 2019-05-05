import React, { FC, useState, createContext } from 'react'
import { noop } from 'utils'
import auth from 'services/authStorage'
import { IInitialContextState, IProps, ILoginData, IUser } from './types'

const AuthContext = createContext<IInitialContextState>({
  state: {
    user: null,
  },
  actions: {
    login: noop,
    logout: noop,
  },
})

export const AuthProvider: FC<IProps> = ({ children }) => {
  const initialUserState = auth.getUser()
  const [user, setUser] = useState<IUser | null>(initialUserState)

  const login = ({ refreshToken, accessToken, ...userData }: ILoginData) => {
    auth.setAccessToken(accessToken)
    auth.setRefreshToken(refreshToken)
    auth.setUser(userData)
    setUser(userData)
  }

  const logout = () => {
    auth.removeAccessToken()
    auth.removeRefreshToken()
    auth.removeUser()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        state: {
          user,
        },
        actions: {
          login,
          logout,
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
