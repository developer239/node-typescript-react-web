import React, { FC } from 'react'
import { Formik, FormikProps } from 'formik'
import TextInput from 'components/Form/Input'
import Button from 'components/Button'
import { Link } from 'react-router-dom'
import { validationSchema, onSubmit, initialValues } from './config'
import { IProps, IFormValues } from './types'

const PasswordForgotForm: FC<IProps> = props => (
  <Formik
    initialValues={initialValues()}
    validationSchema={validationSchema}
    onSubmit={onSubmit(props)}
    render={({
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }: FormikProps<IFormValues>) => (
      <form onSubmit={handleSubmit}>
        <h2>Recover Password</h2>
        <TextInput
          id="email"
          label="Email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
        />
        <Button className="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? '...' : 'Submit'}
        </Button>
        <br />
        <Link to="/login">
          <Button className="small">use existing account</Button>
        </Link>
      </form>
    )}
  />
)

export default PasswordForgotForm
