import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import FormInputField from 'components/common/FormInputField';
import messages from './messages';


class OfferModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.values = {
      cost: '',
      estimated_time: '',
    };
  }

  handleFieldChange(event) {
    this.values[event.target.name] = event.target.value;
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={() => this.props.handleClose()}>
        <Modal.Header>
          <Modal.Title>{`Presupuesto: ${this.props.projectName}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
            <FormInputField
              fieldName={'U$S:'}
              fieldId={'cost'}
              validationState={this.props.errorsInFields.cost ? 'error' : null}
              onChange={(event) => this.handleFieldChange(event)}
              errorMessage={this.props.intl.formatMessage(messages.error)}
              inputType={'input'}
              key={'cost'}
            />

            <FormInputField
              fieldName={'Días estimados:'}
              fieldId={'estimated_time'}
              validationState={this.props.errorsInFields.estimated_time ? 'error' : null}
              onChange={(event) => this.handleFieldChange(event)}
              errorMessage={this.props.intl.formatMessage(messages.error)}
              inputType={'input'}
              key={'estimated_time'}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsStyle="warning"
            onClick={() => this.props.handleClose()}
          >
            {this.props.intl.formatMessage(messages.cancel)}
          </Button>
          <Button
            bsStyle="success"
            onClick={() => this.props.handleClose(this.values)}
          >
            {this.props.intl.formatMessage(messages.confirm)}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

OfferModal.propTypes = {
  show: PropTypes.bool,
  projectName: PropTypes.string,
  handleClose: PropTypes.func,
  errorsInFields: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(OfferModal);
