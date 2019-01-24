import React, { FunctionComponent, InputHTMLAttributes } from 'react'
import { FormikErrors } from 'formik'
import { Row, Column } from '../../Grid'
import Description from '../../Description'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FormikErrors<string | boolean>
  label?: string
  description?: string
}

const TextInput: FunctionComponent<IProps> = ({
  error,
  label,
  description,
  ...inputProps
}) => (
  <div>
    <Row>
      {label && (
        <Column md={2}>
          <label htmlFor={inputProps.id}>{label}</label>
        </Column>
      )}
      <Column md={10}>
        <input {...inputProps} autoComplete="off" />
        {error && <span>{error}</span>}
      </Column>
    </Row>
    {description && <Description>{description}</Description>}
  </div>
)

export default TextInput
