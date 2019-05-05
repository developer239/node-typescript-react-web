import React, { FC } from 'react'
import { Formik, FormikProps } from 'formik'
import TextInput from 'components/Form/Input'
import Button from 'components/Button'
import { IFormValues, IProps } from './types'
import { initialValues, onSubmit } from './config'

const UserAddressForm: FC<IProps> = props => (
  <Formik
    initialValues={initialValues()}
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
        <h2>User Info</h2>
        <TextInput
          id="email"
          type="email"
          label="Email"
          placeholder="Email"
          value={props.user.email}
          disabled
        />
        <Button className="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? '...' : 'Save Info'}
        </Button>
      </form>
    )}
  />
)

export default UserAddressForm
