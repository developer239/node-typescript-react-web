import Cookie from 'js-cookie'
import { IUser } from 'modules/auth/context/types'

enum STORAGE {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
  USER = 'user',
}

const authService = {
  getAccessToken: () => Cookie.get(STORAGE.ACCESS_TOKEN),

  getRefreshToken: () => Cookie.get(STORAGE.REFRESH_TOKEN),

  setAccessToken: (token: string) =>
    Cookie.set(STORAGE.ACCESS_TOKEN, token, { expires: 365 }),

  setRefreshToken: (token: string) =>
    Cookie.set(STORAGE.REFRESH_TOKEN, token, { expires: 365 }),

  removeAccessToken: () => Cookie.remove(STORAGE.ACCESS_TOKEN),

  removeRefreshToken: () => Cookie.remove(STORAGE.ACCESS_TOKEN),

  getUser: (): IUser => {
    const user = Cookie.get(STORAGE.USER)
    return JSON.parse(user || 'null')
  },

  setUser: (user: IUser) => Cookie.set(STORAGE.USER, JSON.stringify(user)),

  removeUser: () => Cookie.remove(STORAGE.USER),
}

export default authService
