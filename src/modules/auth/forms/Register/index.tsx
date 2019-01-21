import React, { FC } from 'react'
import { Formik, FormikProps } from 'formik'
import { Link } from 'react-router-dom'
import TextInput from 'src/components/Form/Input'
import Button from 'src/components/Button'
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
        <h2>Register</h2>
        <TextInput
          id="email"
          label="Email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email ? errors.email : undefined}
        />
        <TextInput
          id="password"
          type="password"
          label="Password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password ? errors.password : undefined}
        />
        <Button className="primary" type="submit">
          {isSubmitting ? '...' : 'Submit'}
        </Button>
        <br />
        <Link to="/login">
          <button className="small">use existing account</button>
        </Link>
      </form>
    )}
  />
)

export default LoginForm
