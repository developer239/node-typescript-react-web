export interface IFlashMessage {
  id: string
  type: 'error' | 'success' | 'info'
  message: string
}

export interface IProps {}

export interface IInitialValues {
  state: {
    messages: IFlashMessage[]
  }
  actions: {
    hideMessage: (id: string) => void
    showMessage: (message: IFlashMessage) => void
    showError: (message: string) => void
    showSuccess: (message: string) => void
    showInfo: (message: string) => void
  }
}
