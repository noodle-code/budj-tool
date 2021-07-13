import React from 'react';
import {
  Card
} from 'react-bootstrap';

import CardLink from './../CardLink/CardLink';

const AccountCard = props => (
  <CardLink to={props.to}>
    <Card.Body>
      <h4>{props.name}</h4>
    </Card.Body>
  </CardLink>
);

export default AccountCard;
