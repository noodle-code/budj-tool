import React from 'react';
import {
  Navbar as ReactNavbar,
  Container,
  Nav
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const Navbar = () => (
  <ReactNavbar bg="dark">
    <Container>
      <LinkContainer to="/">
        <ReactNavbar.Brand>Budj</ReactNavbar.Brand>
      </LinkContainer>
      <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactNavbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/">
            <Nav.Link>Config</Nav.Link>
          </LinkContainer>
        </Nav>
      </ReactNavbar.Collapse>
    </Container>
  </ReactNavbar>
);

export default Navbar;
