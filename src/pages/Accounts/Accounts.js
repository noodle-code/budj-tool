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
  },
  {
    id: 1,
    name: 'ACC',
    currentAmount: 10000
  },
];

const Accounts = () => {
  return (
    <PageWrapper>
      <Container>
        <Row>
          <Col className="accounts__header">
            <h3>Accounts</h3>
            <p>Add new</p>
          </Col>
        </Row>
        <Row>
          <Col className="accounts__list">
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
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default Accounts
