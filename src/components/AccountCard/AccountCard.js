import React from 'react';
import {
  Card
} from 'react-bootstrap';

import CardLink from './../CardLink/CardLink';

import './style.css';

const AccountCard = props => (
  <CardLink to={`/accounts/${props.accountId}`} className="accountCard">
    <Card.Body>
      <h4>{props.name}</h4>
      <p>{props.current}</p>
    </Card.Body>
  </CardLink>
);

export default AccountCard;
