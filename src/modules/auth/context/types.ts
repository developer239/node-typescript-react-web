export interface IUser {
  id: string
  email: string
}

export interface ILoginData extends IUser {
  accessToken: string
  refreshToken: string
}

export interface InitialContextState {
  actions: {
    login: (data: ILoginData) => void
    logout: () => void
  }
  state: {
    user: IUser | null
  }
}

export interface IProps {}
