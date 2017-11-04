import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Well, Form, FormGroup, Col, Button } from 'react-bootstrap';
import FormInputField from 'components/common/FormInputField';
import messages from './messages';


function RegisterForm({
  handleFieldChange,
  handleCreateOnClick,
  formFields,
  intl,
}) {
  return (
    <div>
      <Well>

        <Form horizontal>
          {Object.keys(formFields).map((key) =>
            (
              <FormInputField
                fieldName={formFields[key].name}
                fieldId={key}
                validationState={formFields[key].error ? 'error' : null}
                onChange={handleFieldChange}
                errorMessage={intl.formatMessage(messages.error)}
                inputType={formFields[key].inputType}
                key={key}
              />
            ))}
          <FormGroup>
            <Col sm={12}>
              <Button onClick={() => handleCreateOnClick()}>
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
  handleCreateOnClick: PropTypes.func,
  formFields: PropTypes.any,
  intl: intlShape.isRequired,
};

export default injectIntl(RegisterForm);
