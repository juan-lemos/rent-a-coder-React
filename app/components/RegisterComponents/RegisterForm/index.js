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
              <FormattedMessage {...messages.name} />
            </Col>
            <Col sm={12}>
              <FormControl
                type="input"
                name="name"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <FormattedMessage {...messages.userName} />
            </Col>
            <Col sm={12}>
              <FormControl
                type="input"
                name="userName"
              />
            </Col>
          </FormGroup>

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
              <FormattedMessage {...messages.confirmPassword} />
            </Col>
            <Col sm={12}>
              <FormControl
                type="password"
                name="confirmationPassword"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <FormattedMessage {...messages.country} />
            </Col>
            <Col sm={12}>
              <FormControl
                type="input"
                name="country"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <FormattedMessage {...messages.city} />
            </Col>
            <Col sm={12}>
              <FormControl
                type="input"
                name="city"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <FormattedMessage {...messages.tel} />
            </Col>
            <Col sm={12}>
              <FormControl
                type="input"
                name="telephone"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <FormattedMessage {...messages.web} />
            </Col>
            <Col sm={12}>
              <FormControl
                type="input"
                name="web"
              />
            </Col>
          </FormGroup>


          <FormGroup>
            <Col sm={12}>
              <Button type="submit">
                <FormattedMessage {...messages.create} />
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
