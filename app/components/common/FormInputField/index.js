import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Col, FormGroup, ControlLabel } from 'react-bootstrap';

function FormInputField({
  fieldName,
  fieldId,
  validationState,
  onChange,
  errorMessage,
  inputType,
}) {
  return (
    <FormGroup validationState={validationState}>
      <Col sm={12}>
        {fieldName}
      </Col>
      <Col sm={12}>
        <FormControl
          type={inputType}
          name={fieldId}
          onChange={onChange}
        />
        <FormControl.Feedback />
        {validationState === 'error' && <ControlLabel>{errorMessage}</ControlLabel>}
      </Col>
    </FormGroup>
  );
}

FormInputField.propTypes = {
  fieldName: PropTypes.string,
  fieldId: PropTypes.string,
  validationState: PropTypes.string,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  inputType: PropTypes.string,
};

export default FormInputField;
