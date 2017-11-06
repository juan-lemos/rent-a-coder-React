import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import FormInputField from 'components/common/FormInputField';
import { Button, Form, FormGroup, Col, Well, ControlLabel, FormControl } from 'react-bootstrap';

import Select from 'react-select';
import CustomDatePicker from 'components/common/CustomDatePicker';

import 'react-select/dist/react-select.css';

import messages from './messages';

function ProjectForm({
  date,
  handleDateChange,
  handleFieldChange,
  handleSelectedTechnologies,
  handleClickOnCreate,
  errorsInFields,
  technologies,
  selectedTechnologies,
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
                date={date}
                handleDateChange={(selectedDate) => handleDateChange(selectedDate)}
              />
              <FormControl.Feedback />
              {errorsInFields.deadline && <ControlLabel>{intl.formatMessage(messages.error)}</ControlLabel>}
            </Col>
          </FormGroup>

          <FormGroup validationState={errorsInFields.technologies_ids ? 'error' : null}>
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
              <FormControl.Feedback />
              {errorsInFields.technologies_ids && <ControlLabel>{intl.formatMessage(messages.error)}</ControlLabel>}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <Button onClick={() => handleClickOnCreate()}>
                <FormattedMessage {...messages.create} />
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Well>}

    </div>
  );
}

ProjectForm.propTypes = {
  date: PropTypes.object,
  handleDateChange: PropTypes.func,
  handleFieldChange: PropTypes.func,
  handleSelectedTechnologies: PropTypes.func,
  handleClickOnCreate: PropTypes.func,
  technologies: PropTypes.array,
  selectedTechnologies: PropTypes.array,
  errorsInFields: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(ProjectForm);
