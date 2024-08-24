import {FloatingLabel, Form} from 'react-bootstrap';

import './index.scss'

function FormSelect({
    name,
    options = [],
    newClass = '',
    label = null,
  }) {
    // console.log(options)
    // console.log(newClass);
    // console.log(label);
    return (
      <FloatingLabel className={`mySelect ${newClass}`} controlId="floatingSelect" label={label}>
        <Form.Select aria-label="Floating label select example">
          <option></option>
          {options.map((v, k) => (
            <option key={k} value={v}>
              {v}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
    );
}

export default FormSelect;