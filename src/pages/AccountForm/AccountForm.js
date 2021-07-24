import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import {
  PageWrapper
} from './../../components';

const AccountForm = props => (
  <PageWrapper>
    <Container>
      <Row>
        <Col className="justify--spaceBetween" xs={12}>
          <h3>Account name</h3>
          {props.edit && (
            <Button variant="danger">Delete</Button>
          )}
        </Col>
      </Row>
    </Container>
  </PageWrapper>
);

AccountForm.defaultProps = {
  edit: false
};

export default AccountForm;
