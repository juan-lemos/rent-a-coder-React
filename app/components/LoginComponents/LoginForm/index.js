/**
*
* LoginForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Button, Form, FormGroup, Col, FormControl, Well, HelpBlock } from 'react-bootstrap';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import messages from './messages';

function LoginForm({
   logoUrl,
  handleFieldChange,
  handleSignInClick,
  errorInLogin,
  intl }) {
  return (
    <div>
      <img
        src={logoUrl}
        alt="logo"
        width="100%"
      />

      <Well>
        <Form horizontal>
          <FormGroup>
            <Col sm={12}>
              <FormattedMessage {...messages.email} />
            </Col>
            <Col sm={12}>
              <FormControl
                onChange={handleFieldChange}
                type="input"
                name="email"
                placeholder={intl.formatMessage(messages.email)
                }
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <FormattedMessage {...messages.password} />
            </Col>
            <Col sm={12}>
              <FormControl
                onChange={handleFieldChange}
                type="password"
                name="password"
                placeholder={intl.formatMessage(messages.password)}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <Button onClick={() => handleSignInClick()}>
                <FormattedMessage {...messages.singin} />
              </Button>
            </Col>
          </FormGroup>
          {errorInLogin &&
            <FormGroup>
              <Col sm={12}>
                <HelpBlock style={{ color: 'red' }}>{intl.formatMessage(messages.error)}</HelpBlock>
              </Col>
            </FormGroup>
          }
        </Form>
      </Well>
    </div>
  );
}

LoginForm.propTypes = {
  logoUrl: PropTypes.string,
  errorInLogin: PropTypes.bool,
  handleFieldChange: PropTypes.func,
  handleSignInClick: PropTypes.func,
  intl: intlShape.isRequired,
};

export default injectIntl(LoginForm);
