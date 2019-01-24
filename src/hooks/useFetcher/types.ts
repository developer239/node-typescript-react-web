export interface IData {
  data: any
  error: any
  loading: boolean
}

// TODO: Define correct type
export type ISetData = any

export type ILoadDataCallback = (callBack: ISetData) => void

export type IReturnData = [Function, IData]
