import { publicApiClient } from 'services/api/client'
import { ILoginData } from '../context/types'

export const refreshToken = (data: { refreshToken: string; userId: number }) =>
  publicApiClient.post<{ token: string }>('session/token', data)

export const login = (data: { email: string; password: string }) =>
  publicApiClient.post<ILoginData>('session/user', data)

export const register = (data: { email: string; password: string }) =>
  publicApiClient.post<ILoginData>('users', data)

export const passwordForgot = (data: { email: string }) =>
  publicApiClient.post<ILoginData>('session/password-forgot', data)

export const passwordReset = (data: { password: string; token: string }) =>
  publicApiClient.post<ILoginData>('session/password-reset', data)

export default {
  refreshToken,
  login,
  register,
  passwordForgot,
  passwordReset,
}
