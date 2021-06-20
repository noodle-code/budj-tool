import React from 'react';
import {
  Navbar,
  Container,
  Row,
  Col
} from 'react-bootstrap';

import './style.css';

const PageWrapper = props => (
  <div>
    <Navbar bg="dark">Sample</Navbar>
    <Container className="pageWrapper__body">
      <Row>
        <Col>
          {props.children}
        </Col>
      </Row>
    </Container>
  </div>
);

export default PageWrapper;
