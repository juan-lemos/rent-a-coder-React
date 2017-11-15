import React from 'react';
import { ListGroupItem, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';

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


function CandidateListItem({
  offer,
  selectCandidate,
  viewCandidateProfile }) {
  return (
    <ListGroupItem>
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
        <Col xs={12} sm={6}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button style={{ marginRight: '10px' }} onClick={() => selectCandidate(offer)}>
              {'Ver perfil'}
            </Button>
            <Button bsStyle="primary" onClick={() => viewCandidateProfile(offer)}>
              {'Asignar'}
            </Button>
          </div>
        </Col>
      </Row>
    </ListGroupItem>
  );
}

CandidateListItem.propTypes = {
  offer: PropTypes.object,
  selectCandidate: PropTypes.func,
  viewCandidateProfile: PropTypes.func,
};

export default CandidateListItem;
