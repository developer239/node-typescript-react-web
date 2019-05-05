import React, { FC } from 'react'
import { Formik, FormikProps } from 'formik'
import TextInput from 'components/Form/Input'
import Button from 'components/Button'
import { Link } from 'react-router-dom'
import { validationSchema, onSubmit, initialValues } from './config'
import { IProps, IFormValues } from './types'

const LoginForm: FC<IProps> = props => (
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
        <h2>Login</h2>
        <TextInput
          id="email"
          placeholder="Email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
        />
        <TextInput
          id="password"
          placeholder="Password"
          label="Password"
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
        <Link to="/register">
          <Button className="small">create account</Button>
        </Link>
        <Link to="/password-forgot">
          <Button className="small">reset password</Button>
        </Link>
      </form>
    )}
  />
)

export default LoginForm
