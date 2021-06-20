import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';

import './style.css';

class ExpenseForm extends React.Component {
  render() {
    return (
      <Form>
        <Container>
          <Row> 
            <Col xs={12} className="expenseForm__inputWrapper">
              <Form.Control type="text"/>
            </Col>
            <Col xs={12} className="expenseForm__inputWrapper">
              <Form.Control as="select"/>
            </Col>
            <Col xs={12} className="expenseForm__inputWrapper">
              <Form.Control as="select"/>
            </Col>
            <Col xs={12} className="expenseForm__inputWrapper">
              <Form.Control as="textarea"/>
            </Col>
            { this.props.type === 'cashin' && (
              <Col xs={12} className="expenseForm__inputWrapper">
                <Button 
                  block
                  variant="success"
                  size="lg"
                >
                  Cash-in
                </Button>
              </Col>
            )}
            { this.props.type === 'credit'&& (
              <Col xs={12} className="expenseForm__inputWrapper">
                <Button
                  block
                  variant="danger"
                  size="lg"
                >
                  Credit
                </Button>
              </Col>
            )}
          </Row>
        </Container>
      </Form>
    );
  }
}

export default ExpenseForm;
