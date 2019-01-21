import { AxiosError, AxiosRequestConfig } from 'axios'
import { path } from 'ramda'
import auth from 'src/services/auth'
import authApi from 'src/modules/auth/api'
import config from 'src/config'
import { history } from 'src'
import { IExtendedAxiosConfig, IUserId } from './types'
import { refreshTokenClient } from '../index'

export const prefixApiUrl = (requestConfig: AxiosRequestConfig) => {
  requestConfig.url = `${config.server.url}/${requestConfig.url}`
  return requestConfig
}

export const refreshAuthToken = async (error: AxiosError) => {
  const originalRequest = error.config as IExtendedAxiosConfig
  const userId = path(['id'], auth.getUser()) as IUserId
  const refreshToken = auth.getRefreshToken()

  if (
    userId &&
    refreshToken &&
    error.response!.status === 401 &&
    !originalRequest.retry
  ) {
    originalRequest.retry = true
    const response = await authApi.refreshToken({
      userId: parseInt(userId, 10),
      refreshToken,
    })
    auth.setAccessToken(response.data.token)
    return refreshTokenClient(originalRequest)
  }

  return Promise.reject(error)
}

export const errorHandler = async (error: AxiosError) => {
  if (error.response!.status === 401) {
    // https://github.com/jaredpalmer/formik/issues/597#issuecomment-400092105
    setImmediate(() => {
      history.push('/logout')
    })
  }

  return Promise.reject({ ...error, message: error.response!.data.message })
}

export const provideAuthToken = (requestConfig: AxiosRequestConfig) => {
  const accessToken = auth.getAccessToken()
  if (accessToken) {
    requestConfig.headers['authorization'] = `jwt ${accessToken}`
  }
  return requestConfig
}
