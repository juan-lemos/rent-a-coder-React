import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Well, Form, FormGroup, Col, Button } from 'react-bootstrap';
import FormInputField from 'components/common/FormInputField';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import messages from './messages';

function RegisterForm({
  handleFieldChange,
  handleCreateOnClick,
  handleSelectedTechnologies,
  technologies,
  selectedTechnologies,
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
          <FormGroup validationState={null} >
            <Col sm={12}>
              {'Seleccione las tecnologías'}
            </Col>
            <Col sm={12}>
              <Select
                multi
                name="form-field-name"
                value={selectedTechnologies}
                options={technologies}
                onChange={(val) => handleSelectedTechnologies(val)}
              />
            </Col>
          </FormGroup>
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
  handleSelectedTechnologies: PropTypes.func,
  technologies: PropTypes.array,
  selectedTechnologies: PropTypes.array,
  intl: intlShape.isRequired,
};

export default injectIntl(RegisterForm);
