import Cookie from 'js-cookie'
import { IUser } from 'src/modules/auth/context/types'

enum STORAGE {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
  USER = 'user',
}

const getAccessToken = () => Cookie.get(STORAGE.ACCESS_TOKEN)

const getRefreshToken = () => Cookie.get(STORAGE.REFRESH_TOKEN)

const setAccessToken = (token: string) =>
  Cookie.set(STORAGE.ACCESS_TOKEN, token, { expires: 365 })

const setRefreshToken = (token: string) =>
  Cookie.set(STORAGE.REFRESH_TOKEN, token, { expires: 365 })

const removeAccessToken = () => Cookie.remove(STORAGE.ACCESS_TOKEN)

const removeRefreshToken = () => Cookie.remove(STORAGE.ACCESS_TOKEN)

const getUser = (): IUser | null => {
  const user = Cookie.get(STORAGE.USER)

  if (!user) {
    return null
  }

  return JSON.parse(user)
}

const setUser = (user: IUser) => Cookie.set(STORAGE.USER, JSON.stringify(user))

const removeUser = () => Cookie.remove(STORAGE.USER)

export default {
  getAccessToken,
  getRefreshToken,
  getUser,
  setAccessToken,
  setRefreshToken,
  setUser,
  removeAccessToken,
  removeRefreshToken,
  removeUser,
}
