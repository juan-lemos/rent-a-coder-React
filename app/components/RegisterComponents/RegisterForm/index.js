/**
*
* RegisterForm
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

// import FormField from 'components/common/FormField';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Well, Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap';
import messages from './messages';


function RegisterForm({
  handleFieldChange,
  handleCreateInClick,
  nameField,
  intl,
}) {
  return (
    <div>
      <Well>

        <Form horizontal>

          {/* <FormField
            fieldName={intl.formatMessage(messages.name)}
            fieldId={nameField.fieldId}
            validationState={nameField.validationState}
            onChange={() => (console.log('ds'))}
            inputType="input"
            errorMessage="ds"
          /> */}

          <FormGroup validationState="error">
            <Col sm={12}>
              <FormattedMessage {...messages.name} />
            </Col>
            <Col sm={12}>
              <FormControl
                type="input"
                name="name"
                onChange={handleFieldChange}
              />
              <FormControl.Feedback />
              <ControlLabel>Input with error and feedback icon</ControlLabel>
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
                onChange={handleFieldChange}
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
                onChange={handleFieldChange}
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
                onChange={handleFieldChange}
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
                onChange={handleFieldChange}
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
                onChange={handleFieldChange}
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
                onChange={handleFieldChange}
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
              <Button type="submit" onClick={handleCreateInClick}>
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
  handleFieldChange: PropTypes.func,
  handleCreateInClick: PropTypes.func,
  nameField: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(RegisterForm);
