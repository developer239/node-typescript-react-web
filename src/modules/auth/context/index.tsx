import React, { FC, useState, createContext } from 'react'
import { noop } from 'src/utils'
import auth from 'src/services/authStorage'
import { InitialContextState, IProps, ILoginData, IUser } from './types'

const AuthContext = createContext<InitialContextState>({
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

  const login = ({ refreshToken, accessToken, ...user }: ILoginData) => {
    auth.setAccessToken(accessToken)
    auth.setRefreshToken(refreshToken)
    auth.setUser(user)
    setUser(user)
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
