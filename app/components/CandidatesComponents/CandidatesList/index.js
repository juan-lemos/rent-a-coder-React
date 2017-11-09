import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CandidatesListItem from 'components/CandidatesComponents/CandidateListItem';
import PropTypes from 'prop-types';

function CandidatesList({ candidates, viewCandidateProfile, selectCandidate }) {
  return (
    <ListGroup>
      {candidates.map(() => (
        <CandidatesListItem
          candidateName={'Juan'}
          stars={3}
          estimatedPrice={232}
          estimatedTime={30}
          candidateId={42352352}
          selectCandidate={() => viewCandidateProfile()}
          viewCandidateProfile={() => selectCandidate()}
        />
      ))}
    </ListGroup>
  );
}

CandidatesList.propTypes = {
  candidates: PropTypes.array,
  viewCandidateProfile: PropTypes.func,
  selectCandidate: PropTypes.func,
};

export default CandidatesList;
