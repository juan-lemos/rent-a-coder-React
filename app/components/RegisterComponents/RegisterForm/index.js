/**
*
* RegisterForm
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Well, Form, FormGroup, Col, FormControl, Button } from 'react-bootstrap';
import messages from './messages';

function RegisterForm() {
  return (
    <div>
      <Well>
        <Form horizontal>
          <FormGroup>
            <Col sm={12}>
              <FormattedMessage {...messages.email} />
            </Col>
            <Col sm={12}>
              <FormControl
                type="email"
                name="email"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <FormattedMessage {...messages.password} />
            </Col>
            <Col sm={12}>
              <FormControl
                type="password"
                name="password"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <Button type="submit">
                <FormattedMessage {...messages.singin} />
              </Button>
            </Col>
          </FormGroup>

        </Form>
      </Well>

    </div>
  );
}

RegisterForm.propTypes = {

};

export default RegisterForm;
