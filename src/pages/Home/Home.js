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

import './style.css';

const accounts = [
  {
    id: 1,
    name: 'ACC',
    currentAmount: 10000
  },
  {
    id: 1,
    name: 'ACC',
    currentAmount: 10000
  },
  {
    id: 1,
    name: 'ACC',
    currentAmount: 10000
  }

];

const Home = () => {
  return (
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
            <div className="home__accounts">
              {accounts.map(item => {
                return (
                  <AccountCard
                    accountId={item.id}
                    name={item.name}
                    current={item.currentAmount}
                  />
                );
              })
              }
            </div>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}

export default Home;
