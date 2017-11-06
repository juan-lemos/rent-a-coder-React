import React from 'react';
import { Modal, Button, Form, FormGroup, FormControl, Col } from 'react-bootstrap';

class OfferModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Modal show onHide={this.close}>
        <Modal.Header>
          <Modal.Title>Presupuesto: Project Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
            <FormGroup>
              <Col sm={12}>
                {'U$S:'}
              </Col>
              <Col sm={12}>
                <FormControl
                  type="input"
                  name="email"
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={12}>
                {'Días estimados:'}
              </Col>
              <Col sm={12}>
                <FormControl

                  type="password"
                  name="password"
                />
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="warning">Cancelar</Button>
          <Button bsStyle="success">Confirmar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

OfferModal.propTypes = {

};

export default OfferModal;
