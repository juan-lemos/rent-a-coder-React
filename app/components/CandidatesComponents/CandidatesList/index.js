import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CandidatesListItem from 'components/CandidatesComponents/CandidateListItem';
import PropTypes from 'prop-types';

function CandidatesList({ offers, viewCandidateProfile, selectCandidate }) {
  return (
    <ListGroup>
      {offers.map((offer) => (
        <CandidatesListItem
          candidateName={offer.candidate.name}
          stars={offer.candidate.developer_score}
          estimatedPrice={offer.cost}
          estimatedTime={offer.estimated_time}
          candidateId={offer.candidate.id}
          selectCandidate={() => viewCandidateProfile()}
          viewCandidateProfile={() => selectCandidate()}
        />
      ))}
    </ListGroup>
  );
}

CandidatesList.propTypes = {
  offers: PropTypes.array,
  viewCandidateProfile: PropTypes.func,
  selectCandidate: PropTypes.func,
};

export default CandidatesList;
