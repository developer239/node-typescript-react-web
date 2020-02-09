export interface IFormValues {
  token: string
  password: string
}

export interface IProps {
  submit: (values: IFormValues) => Promise<void>
  token: string
}
