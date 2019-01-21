export interface IFormValues {
  email: string
}

export interface IProps {
  submit: (values: IFormValues) => Promise<void>
}
