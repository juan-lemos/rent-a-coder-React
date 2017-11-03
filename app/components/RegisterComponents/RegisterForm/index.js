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
          {formFields.map((item, i) =>
            (
              <FormInputField
                fieldName={item.name}
                fieldId={item.id}
                validationState={item.error ? 'error' : null}
                onChange={handleFieldChange}
                errorMessage={intl.formatMessage(messages.error)}
                inputType={item.inputType}
                key={i}
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
  formFields: PropTypes.array,
  intl: intlShape.isRequired,
};

export default injectIntl(RegisterForm);
