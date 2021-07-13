import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {
  Card
} from 'react-bootstrap';

import './style.css';

const CardLink = props => (
  <LinkContainer to={props.to}>
    <Card className="cardLink">
      <Card.Body>
        {props.children}
      </Card.Body>
    </Card>
  </LinkContainer>
);

export default CardLink;
