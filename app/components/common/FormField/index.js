/**
*
* FormField
*
*/

import React, { PropTypes } from 'react';
import { FormControl, Col, FormGroup, ControlLabel } from 'react-bootstrap';

function FormField({
  fieldName,
  fieldId,
  validationState,
  onChange,
  inputType = 'input',
  errorMessage,
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

FormField.propTypes = {
  fieldName: PropTypes.string,
  fieldId: PropTypes.string,
  validationState: PropTypes.string,
  onChange: PropTypes.func,
  inputType: PropTypes.string,
  thereIsError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default FormField;
