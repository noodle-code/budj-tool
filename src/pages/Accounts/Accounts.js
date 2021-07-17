import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import {
  PageWrapper,
  AccountCard
} from './../../components';

const Accounts = () => {
  return (
    <PageWrapper>
      <Container>
        <Row>
          <Col>
            Accounts
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default Accounts
