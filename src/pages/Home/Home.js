import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import {
  PageWrapper,
  CardLink
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
          <div className="home__section__header">
            <h2>Accounts</h2>
            <p>Manage</p>
          </div>
          <div>
            <Container>
              <Row>
                <Col xs={4}>
                  <CardLink to="/account">
                    <h4>ACC</h4>
                  </CardLink>
                </Col>
                <Col xs={4}>
                  <CardLink to="/account">
                    <h4>ACC</h4>
                  </CardLink>
                </Col>
                <Col xs={4}>
                  <CardLink to="/account">
                    <h4>ACC</h4>
                  </CardLink>
                </Col>
                <Col xs={4}>
                  <CardLink to="/account">
                    <h4>ACC</h4>
                  </CardLink>
                </Col>
                <Col xs={4}>
                  <CardLink to="/account">
                    <h4>ACC</h4>
                  </CardLink>
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
