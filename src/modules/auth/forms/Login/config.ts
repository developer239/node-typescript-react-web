import { FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { IProps, IFormValues } from './types'

export const validationSchema = Yup.object().shape({})

export const onSubmit = (props: IProps) => async (
  values: IFormValues,
  { setSubmitting }: FormikHelpers<IFormValues>
) => {
  setSubmitting(true)
  await props.submit(values)
  setSubmitting(false)
}

export const initialValues = () => ({ email: '', password: '' })
