import axios from 'axios'
import {
  prefixApiUrl,
  provideAuthToken,
  refreshAuthToken,
  errorHandler,
} from './plugins'

export const publicApiClient = axios.create()
publicApiClient.interceptors.request.use(prefixApiUrl)
publicApiClient.interceptors.response.use(undefined, errorHandler)

export const authorizedApiClient = axios.create()
authorizedApiClient.interceptors.request.use(prefixApiUrl)
authorizedApiClient.interceptors.request.use(provideAuthToken)
authorizedApiClient.interceptors.response.use(undefined, refreshAuthToken)
authorizedApiClient.interceptors.response.use(undefined, errorHandler)

export const refreshTokenClient = axios.create()
refreshTokenClient.interceptors.request.use(provideAuthToken)
refreshTokenClient.interceptors.response.use(undefined, refreshAuthToken)
