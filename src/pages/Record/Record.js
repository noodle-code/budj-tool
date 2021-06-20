import React, {useState} from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import {
  PageWrapper,
  ExpenseTable,
  ExpenseModal
} from './../../components';

import './style.css';

const Record = () => {
  const defaultModalState = {type:'', open: false};
  const [formState, setFormState] = useState(defaultModalState);

  const openCashinForm = () => setFormState({type: 'cashin', open: true});
  const openCreditForm = () => setFormState({type: 'credit', open: true});
  const closeModalForm = () => setFormState(defaultModalState);

  return (
    <PageWrapper>
      <Container>
        <Row className="record__header">
          <Col xs={9}>
            <h2>Account name</h2>  
          </Col>
          <Col xsi={3} className="record__control text-right">
            <Button 
              variant="success"
              onClick={openCashinForm}
            >
              Cash-in
            </Button>
            <Button 
              variant="outline-danger"
              onClick={openCreditForm}
            >
              Credit
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>Statements</h3>
          </Col>
          <Col xs={12}></Col>
          <Col xs={12}>
            <ExpenseTable />
          </Col>
        </Row>
      </Container>
      <ExpenseModal 
        show={formState.open}
        type={formState.type}
        onHide={closeModalForm}
      />
    </PageWrapper>
  );
}

export default Record;
