import { IUser } from 'src/modules/auth/context/types'

export interface IFormValues {}

export interface IProps {
  user: IUser
  submit: (values: IFormValues) => Promise<void>
}
