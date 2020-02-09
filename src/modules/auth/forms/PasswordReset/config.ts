import { FormikActions } from 'formik'
import * as Yup from 'yup'
import { IProps, IFormValues } from './types'

export const validationSchema = Yup.object().shape({
  token: Yup.string().required(),
  password: Yup.string()
    .max(5)
    .max(80)
    .required(),
})

export const onSubmit = (props: IProps) => async (
  values: IFormValues,
  { setSubmitting }: FormikActions<IFormValues>
) => {
  setSubmitting(true)
  await props.submit(values)
  setSubmitting(false)
}

export const initialValues = (props: IProps) => ({
  token: props.token,
  password: '',
})
