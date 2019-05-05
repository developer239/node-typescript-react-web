import React, { FunctionComponent, useState, createContext } from 'react'
import { filter } from 'ramda'
import { nanoid, noop } from 'utils'
import { IFlashMessage, IProps, IInitialValues } from './types'

const FLashMessagesContext = createContext<IInitialValues>({
  state: {
    messages: [],
  },
  actions: {
    hideMessage: noop,
    showMessage: noop,
    showError: noop,
    showSuccess: noop,
    showInfo: noop,
  },
})

export const FlashMessagesProvider: FunctionComponent<IProps> = ({
  children,
}) => {
  const [messages, setMessages] = useState<IFlashMessage[]>([])

  const hideMessage = (id: string) =>
    setMessages(currentMessages =>
      filter(item => item.id !== id, currentMessages)
    )

  const showMessage = (message: IFlashMessage) => {
    setMessages(currentMessages => [...currentMessages, message])
    setTimeout(() => {
      hideMessage(message.id)
    }, 5000)
  }

  const showError = (message: string) =>
    showMessage({ id: nanoid(), message, type: 'error' })

  const showSuccess = (message: string) =>
    showMessage({ id: nanoid(), message, type: 'success' })

  const showInfo = (message: string) =>
    showMessage({ id: nanoid(), message, type: 'info' })

  return (
    <FLashMessagesContext.Provider
      value={{
        state: {
          messages,
        },
        actions: {
          hideMessage,
          showMessage,
          showError,
          showSuccess,
          showInfo,
        },
      }}
    >
      {children}
    </FLashMessagesContext.Provider>
  )
}

export default FLashMessagesContext
