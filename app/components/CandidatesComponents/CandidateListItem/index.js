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
  candidateName,
  stars,
  estimatedPrice,
  estimatedTime,
  candidateId,
  selectCandidate,
  viewCandidateProfile }) {
  return (
    <ListGroupItem>
      <Row>
        <Col xs={12}>
          <NameAndStarts>
            <NameItem>
              {candidateName}
            </NameItem>
            <span>
              <ReactStars count={5} value={stars} className="rating-container" edit={false} size={20} />
            </span>
          </NameAndStarts>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <Row>
            {`U$S: ${estimatedPrice}`}
          </Row>
          <Row>
            {`Días estimados: ${estimatedTime}`}
          </Row>
        </Col>
        <Col xs={12} sm={6}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button style={{ marginRight: '10px' }} onClick={() => selectCandidate(candidateId)}>
              {'Ver perfil'}
            </Button>
            <Button bsStyle="primary" onClick={() => viewCandidateProfile(candidateId)}>
              {'Asignar'}
            </Button>
          </div>
        </Col>
      </Row>
    </ListGroupItem>
  );
}

CandidateListItem.propTypes = {
  candidateName: PropTypes.string,
  stars: PropTypes.number,
  estimatedPrice: PropTypes.string,
  estimatedTime: PropTypes.number,
  candidateId: PropTypes.number,
  selectCandidate: PropTypes.func,
  viewCandidateProfile: PropTypes.func,
};

export default CandidateListItem;
