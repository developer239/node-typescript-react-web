import { useContext, useState } from 'react'
import FlashMessagesContext from 'modules/flash/context'
import { IFetcherState, IReturnData } from './types'

const useFetcher = (): IReturnData => {
  const { actions } = useContext(FlashMessagesContext)
  const [fetcherState, setFetcherState] = useState<IFetcherState>({
    isLoading: false,
  })

  const loadData = async (apiCall: any, data: any) => {
    try {
      setFetcherState({ isLoading: true })
      const response = await apiCall(data)
      setFetcherState({ isLoading: false })
      return response
    } catch (error) {
      const errorMessage = error.message || error.response.data
      actions.showError(errorMessage)
      setFetcherState({ isLoading: false })
      return { error: errorMessage }
    }
  }

  return [loadData, fetcherState]
}

export default useFetcher
