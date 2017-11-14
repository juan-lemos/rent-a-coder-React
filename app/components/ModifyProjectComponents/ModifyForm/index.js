import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import FormInputField from 'components/common/FormInputField';
import { Button, Form, FormGroup, Col, Well, ControlLabel, FormControl } from 'react-bootstrap';

import Select from 'react-select';
import CustomDatePicker from 'components/common/CustomDatePicker';

import 'react-select/dist/react-select.css';

import messages from './messages';

function ModifyForm({
  handleDateChange,
  handleFieldChange,
  handleSelectedTechnologies,
  handleClickOnCreate,
  errorsInFields,
  technologies,
  values,
  intl,
}) {
  return (
    <div>
      {<Well>
        <Form horizontal>
          <FormInputField
            fieldName="Nombre"
            fieldId="name"
            validationState={errorsInFields.name ? 'error' : null}
            errorMessage={intl.formatMessage(messages.error)}
            inputType="input"
            defaultValue={values.name}
            onChange={handleFieldChange}
          />

          <FormGroup validationState={errorsInFields.description ? 'error' : null}>
            <Col sm={12}>
              {'Descripción'}
            </Col>
            <Col sm={12}>
              <FormControl
                componentClass="textarea"
                style={{ height: '150px' }}
                onChange={handleFieldChange}
                name="description"
                defaultValue={values.description}
              />
              <FormControl.Feedback />
              {errorsInFields.description && <ControlLabel>{intl.formatMessage(messages.error)}</ControlLabel>}
            </Col>
          </FormGroup>

          <FormGroup validationState={errorsInFields.deadline ? 'error' : null}>
            <Col sm={12}>
              {'Seleccione la fecha'}
            </Col>
            <Col sm={12}>
              <CustomDatePicker
                date={values.deadline}
                handleDateChange={(selectedDate) => handleDateChange(selectedDate)}
              />
              <FormControl.Feedback />
              {errorsInFields.deadline && <ControlLabel>{intl.formatMessage(messages.error)}</ControlLabel>}
            </Col>
          </FormGroup>

          <FormGroup validationState={errorsInFields.selectedTechnologies ? 'error' : null}>
            <Col sm={12}>
              {'Seleccione las tecnologías'}
            </Col>
            <Col sm={12}>
              <Select
                multi
                name="form-field-name"
                value={values.selectedTechnologies}
                options={technologies}
                onChange={(val) => handleSelectedTechnologies(val)}
              />
              <FormControl.Feedback />
              {errorsInFields.technologies_ids && <ControlLabel>{intl.formatMessage(messages.error)}</ControlLabel>}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <Button onClick={() => handleClickOnCreate()}>
                {'Modificar'}
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Well>}

    </div>
  );
}

ModifyForm.propTypes = {
  handleDateChange: PropTypes.func,
  handleFieldChange: PropTypes.func,
  handleSelectedTechnologies: PropTypes.func,
  handleClickOnCreate: PropTypes.func,
  technologies: PropTypes.array,
  errorsInFields: PropTypes.object,
  values: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(ModifyForm);
