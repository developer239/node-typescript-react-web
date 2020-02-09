import { FormikHelpers } from 'formik'
import { IFormValues, IProps } from './types'

export const initialValues = () => ({})

export const onSubmit = (props: IProps) => async (
  values: IFormValues,
  { setSubmitting }: FormikHelpers<IFormValues>
) => {
  setSubmitting(true)
  await props.submit(values)
  setSubmitting(false)
}
