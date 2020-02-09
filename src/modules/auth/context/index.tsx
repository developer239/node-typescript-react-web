import React, { FC, useState, createContext } from 'react'
import { noop } from 'utils'
import { authStorage } from 'services/authStorage'
import { IInitialContextState, ILoginData, IUser } from './types'

export const AuthContext = createContext<IInitialContextState>({
  state: {
    user: null,
  },
  actions: {
    login: noop,
    logout: noop,
  },
})

export const AuthProvider: FC = ({ children }) => {
  const initialUserState = authStorage.getUser()
  const [user, setUser] = useState<IUser | null>(initialUserState)

  const login = ({ refreshToken, accessToken, ...userData }: ILoginData) => {
    authStorage.setAccessToken(accessToken)
    authStorage.setRefreshToken(refreshToken)
    authStorage.setUser(userData)
    setUser(userData)
  }

  const logout = () => {
    authStorage.removeAccessToken()
    authStorage.removeRefreshToken()
    authStorage.removeUser()
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
