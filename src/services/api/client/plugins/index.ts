import { AxiosError, AxiosRequestConfig } from 'axios'
import * as R from 'ramda'
import { authStorage } from 'services/authStorage'
import * as authApi from 'modules/auth/api'
import { config } from 'config'
import { history } from '../../../../index'
import { refreshTokenClient } from '../index'
import { IExtendedAxiosConfig, IUserId } from './types'

export const prefixApiUrl = (requestConfig: AxiosRequestConfig) => {
  requestConfig.url = `${config.server.url}/${requestConfig.url}`
  return requestConfig
}

export const refreshAuthToken = async (error: AxiosError) => {
  const originalRequest = error.config as IExtendedAxiosConfig
  const userId = R.path<string>(['id'], authStorage.getUser())
  const refreshToken = authStorage.getRefreshToken()

  if (
    userId &&
    refreshToken &&
    error.response?.status === 401 &&
    !originalRequest.retry
  ) {
    originalRequest.retry = true
    const response = await authApi.refreshToken({
      userId: parseInt(userId, 10),
      refreshToken,
    })
    authStorage.setAccessToken(response.data.token)
    return refreshTokenClient(originalRequest)
  }

  return Promise.reject(error)
}

export const errorHandler = (error: AxiosError) => {
  if (
    error.response?.status === 401 &&
    !error.response?.config.url?.includes('/session/user')
  ) {
    // https://github.com/jaredpalmer/formik/issues/597#issuecomment-400092105
    setImmediate(() => {
      history.push('/logout')
    })
  }

  // eslint-disable-next-line
  return Promise.reject({ ...error, message: error.response!.data.message })
}

export const provideAuthToken = (requestConfig: AxiosRequestConfig) => {
  const accessToken = authStorage.getAccessToken()
  if (accessToken) {
    requestConfig.headers.authorization = `jwt ${accessToken}`
  }
  return requestConfig
}
