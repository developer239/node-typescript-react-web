import React, { FC } from 'react'
import { Formik, FormikProps } from 'formik'
import { Link } from 'react-router-dom'
import TextInput from 'components/Form/Input'
import Button from 'components/Button'
import { IProps, IFormValues } from './types'
import { validationSchema, onSubmit, initialValues } from './config'

const PasswordResetForm: FC<IProps> = props => (
  <Formik
    initialValues={initialValues(props)}
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
        <h2>Reset Password</h2>
        <TextInput
          hidden
          id="token"
          placeholder="Token"
          value={values.token}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.token && errors.token}
        />
        <TextInput
          id="password"
          label="New Password"
          placeholder="New Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
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

export default PasswordResetForm
