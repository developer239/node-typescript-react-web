import React, { FunctionComponent, InputHTMLAttributes } from 'react'
import { FormikErrors } from 'formik'
import Description from '../../Description'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | false | FormikErrors<any>
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
    <div className="row responsive-label">
      {label && (
        <div className="col-sm-12 col-md-2">
          <label htmlFor={inputProps.id}>{label}</label>
        </div>
      )}
      <div className="col-sm-12 col-md">
        <input {...inputProps} autoComplete="off" />
        {error && <span>{error}</span>}
      </div>
    </div>
    {description && <Description>{description}</Description>}
  </div>
)

export default TextInput
