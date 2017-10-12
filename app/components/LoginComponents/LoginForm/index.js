/**
*
* LoginForm
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { Button, Form, FormGroup, Col, FormControl, Well, HelpBlock } from 'react-bootstrap';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import messages from './messages';

function LoginForm({
   logoUrl,
  handleEmailFieldChange,
  handlePasswordFieldChange,
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
          <FormGroup controlId="formHorizontalEmail">
            <Col sm={12}>
              <FormattedMessage {...messages.email} />
            </Col>
            <Col sm={12}>
              <FormControl
                onChange={handleEmailFieldChange}
                type="email"
                placeholder={intl.formatMessage(messages.email)}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col sm={12}>
              <FormattedMessage {...messages.password} />
            </Col>
            <Col sm={12}>
              <FormControl
                onChange={handlePasswordFieldChange}
                type="password"
                placeholder={intl.formatMessage(messages.password)}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <Button type="submit" onClick={handleSignInClick()}>
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
  handleEmailFieldChange: PropTypes.func,
  handlePasswordFieldChange: PropTypes.func,
  handleSignInClick: PropTypes.func,
  intl: intlShape.isRequired,
};

export default injectIntl(LoginForm);
