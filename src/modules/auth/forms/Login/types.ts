export interface IFormValues {
  email: string
  password: string
}

export interface IProps {
  submit: (values: IFormValues) => Promise<void>
}
