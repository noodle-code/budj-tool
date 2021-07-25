import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import {
  PageWrapper
} from './../../components';
import FormBuilder from './../../forms/components/FormBuilder';

import './style.css';

const AccountForm = props => {
  const history = useHistory();

  return (
    <PageWrapper>
      <Container>
        <Row>
          <Col className="justify--spaceBetween">
            <div className="flex-row headerControl">
              <Button onClick={history.goBack}>B</Button>
              <h3>{(props.edit) ? 'Edit Account' : 'Create Account'}</h3>
            </div>
            {(props.edit) && (<Button variant="danger">Delete</Button>)}
          </Col>
        </Row>
        <Row>
          <Col>
            <FormBuilder form="financeAccount" />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

AccountForm.defaultProps = {
  edit: false
};

export default AccountForm;
