import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {
  Card
} from 'react-bootstrap';

import './style.css';

const CardLink = props => {
  if (props.to) {
    return (
      <LinkContainer to={props.to}>
        <Card className="cardLink">
          {props.children}
        </Card>
      </LinkContainer>
    );
  }

  return (
    <Card className="cardLink">
      {props.children}
    </Card>
  );
}

export default CardLink;
