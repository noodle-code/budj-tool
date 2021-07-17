import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import Navbar from './../Navbar/Navbar';

import './style.css';

const PageWrapper = props => (
  <div>
    <Navbar/>
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
