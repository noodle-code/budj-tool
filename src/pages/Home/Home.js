import React from 'react';
import {Link} from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card
} from 'react-bootstrap';

import {
  PageWrapper,
} from './../../components';

import './style.css';

const Home = () => (
  <PageWrapper>
    <Container>
      <Row>
        <Col className="home__section">
          <h2>Goal</h2>
          <h1>Php 0.00</h1>
        </Col>
      </Row>
      <Row>
        <Col className="home__section">
          <h2>Accounts</h2>
          <div>
            <Container>
              <Row>
                <Col xs={4}>
                  <Card>
                    <Card.Body>
                      <h4>ACC</h4>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <Card.Body>
                      <h4>ACC</h4>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <Card.Body>
                      <h4>ACC</h4>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <Card.Body>
                      <h4>ACC</h4>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <Card.Body>
                      <h4>ACC</h4>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  </PageWrapper>
);

export default Home;
