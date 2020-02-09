import { FormikActions } from 'formik'
import { IFormValues, IProps } from './types'

export const initialValues = () => ({})

export const onSubmit = (props: IProps) => async (
  values: IFormValues,
  { setSubmitting }: FormikActions<IFormValues>
) => {
  setSubmitting(true)
  await props.submit(values)
  setSubmitting(false)
}
