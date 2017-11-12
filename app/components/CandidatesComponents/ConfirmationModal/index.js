import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import ReactStars from 'react-stars';
import styled from 'styled-components';

const NameAndStarts = styled.span`
display: flex;
align-items: center;
`;

const NameItem = styled.span`
color: #000;
margin-right: 20px;
font-size: 1.2em;
font-weight: bold;
`;

function ConfirmationModal({ offer, onCancel, onConfirm }) {
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>{'¿Esta seguro que desea asignar el proyecto a la oferta?'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12}>
            <NameAndStarts>
              <NameItem>
                {offer.candidate.name}
              </NameItem>
              <span>
                <ReactStars count={5} value={offer.candidate.developer_score} className="rating-container" edit={false} size={20} />
              </span>
            </NameAndStarts>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Row>
              {`U$S: ${offer.cost}`}
            </Row>
            <Row>
              {`Días estimados: ${offer.estimated_time}`}
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onCancel()}>{'Cancelar'}</Button>
        <Button bsStyle="primary" onClick={() => onConfirm()}>{'Confirmar'}</Button>
      </Modal.Footer>

    </Modal.Dialog>
  );
}

ConfirmationModal.propTypes = {
  offer: PropTypes.object,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
};

export default ConfirmationModal;
