import { IUser } from 'modules/auth/context/types'

// eslint-disable-next-line
export interface IFormValues {}

export interface IProps {
  user: IUser
  submit: (values: IFormValues) => Promise<void>
}
