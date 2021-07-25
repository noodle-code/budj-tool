import React from 'react';
import {
  Form
} from 'react-bootstrap';
import Select from 'react-select';

const LabeledInput = props => (
  <Form.Group>
    <Form.Label>{props.label}</Form.Label>
    {generateInput(props)}
  </Form.Group>
);

const generateInput = (inputProps) => {
  const {desc, options, ...props} = inputProps;

  if (props.type === 'checkbox' || props.type === 'radio') {
    return (<Form.Check {...props} label={desc} />);
  }

  if (props.type === 'select') {
    return (<Select options={options} />);
  }

  return (<Form.Control {...props} />);
};

export default LabeledInput;
