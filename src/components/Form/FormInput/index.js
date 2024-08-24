import React from 'react'
import { FloatingLabel, Form } from "react-bootstrap"

import './index.scss'

function FormInput({
  name,
  type = 'text',
  value = null,
  placeholder = null,
  newClass = '',
  label = null,
  onChange = null,
  onBlur = null
}) {
  return (
    <FloatingLabel className={`myInput ${newClass}`} controlId={`floating${name}`} label={label} >
      <Form.Control
        type={type}
        placeholder={`${placeholder ? placeholder : value}`}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name} />
    </FloatingLabel>
  )
}

export default FormInput