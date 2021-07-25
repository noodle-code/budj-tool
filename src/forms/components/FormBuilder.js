import React from 'react';
import { Formik } from 'formik';
import {
  Form,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap';

import formConfigs from './../configs';
import {
  LabeledInput
} from './../../components';

const FormBuilder = props => {
  const {form, ...formikProps} = props;

  return (
    <Formik {...formikProps}>
      {
        props => (
          <Container fluid className="p-0">
            <Row>
              <Col md={12}>
                <Form>
                  {formConfigs[form].map((input, index) => (
                    <LabeledInput {...input} key={index} />
                  ))}
                </Form>
              </Col>
            </Row>
            <Row>
              <Col md={{span: 2, offset: 10}}>
                <Button  block variant="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
        )
      }
    </Formik>
  );
};

export default FormBuilder;
