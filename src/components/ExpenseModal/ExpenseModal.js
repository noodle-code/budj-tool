import React from 'react';
import {
  Modal
} from 'react-bootstrap';

import ExpenseForm from './../ExpenseForm/ExpenseForm';

const ExpenseModal = (props) => {
  const {type, ...modalProps} = props;
  console.log(type);
  return(
    <Modal 
      {...modalProps}
      animation={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>New Record</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ExpenseForm type={type} />
      </Modal.Body>
    </Modal> 
  );
}

export default ExpenseModal;
