export interface IData {
  data: any
  error: any
  loading: boolean
}

export type ISetData = any

export type ILoadDataCallback = Function

export type IReturnData = [Function, IData]
