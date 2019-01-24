import { useContext, useState } from 'react'
import FlashMessagesContext from 'src/modules/flash/context'
import { IData, ILoadDataCallback, IReturnData } from './types'

const useFetcher = (): IReturnData => {
  const {
    actions: { showError },
  } = useContext(FlashMessagesContext)

  const [data, setData] = useState<IData>({
    data: null,
    error: null,
    loading: true,
  })

  const loadData = async (callback: ILoadDataCallback) => {
    try {
      setData({ ...data, loading: true })
      await callback((data: IData) =>
        setData({ loading: false, error: null, data })
      )
    } catch (error) {
      const errorMessage = error.message || error.response.data
      showError(errorMessage)
      setData({ data: null, error: { message: errorMessage }, loading: false })
    }
  }

  return [loadData, data]
}

export default useFetcher
