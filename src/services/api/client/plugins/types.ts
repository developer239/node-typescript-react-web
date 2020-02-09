import { AxiosRequestConfig } from 'axios'

export interface IExtendedAxiosConfig extends AxiosRequestConfig {
  retry?: boolean
}

export type IUserId = string | undefined
