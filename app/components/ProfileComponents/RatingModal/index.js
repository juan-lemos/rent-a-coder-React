import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import ReactStars from 'react-stars';

function RatingModal({ onCancel, onConfirm, onRatingChange }) {
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Califica al desarrollador</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <ReactStars count={5} size={40} onChange={(rating) => onRatingChange(rating)} />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onCancel()}>Cancelar</Button>
        <Button bsStyle="primary" onClick={() => onConfirm()}>Confirmar</Button>
      </Modal.Footer>

    </Modal.Dialog>
  );
}

RatingModal.propTypes = {
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onRatingChange: PropTypes.func,
};

export default RatingModal;
