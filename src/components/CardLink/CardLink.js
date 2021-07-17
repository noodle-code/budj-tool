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
        <Card className={`cardLink ${props.className}`}>
          {props.children}
        </Card>
      </LinkContainer>
    );
  }

  return (
    <Card className={`cardLink ${props.className}`}>
      {props.children}
    </Card>
  );
}

CardLink.defaultProps = {
  className: ""
};

export default CardLink;
