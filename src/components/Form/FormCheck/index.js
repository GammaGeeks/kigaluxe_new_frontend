import React from 'react'
import { Form } from "react-bootstrap"

import './index.scss'

function FormInput({
  name,
  type,
  value,
  placeholder = null,
  inline = false,
  label = null,
  onChange = null,
  onBlur = null,
}) {
  return (
    <Form.Check
      variant
      id={`default-${type}`}
      inline={inline}
      type={type}
      label={label}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value
    />
  )
}

export default FormInput