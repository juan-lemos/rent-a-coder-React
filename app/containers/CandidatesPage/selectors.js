import { createSelector } from 'reselect';

const selectCandidatesPageDomain = (state) => state.get('candidatesPage');


const makeSelectCandidates = () =>
createSelector(selectCandidatesPageDomain, (substate) =>
  substate.get('responseCandidates')
);
const makeSelectCandidatesLoading = () =>
createSelector(selectCandidatesPageDomain, (substate) =>
  substate.get('loadingCandidates')
);
const makeSelectCandidatesError = () =>
createSelector(selectCandidatesPageDomain, (substate) =>
  substate.get('errorCandidates')
);

const makeSelectSelectCandidate = () =>
createSelector(selectCandidatesPageDomain, (substate) =>
  substate.get('responsePutCandidate')
);
const makeSelectSelectCandidateLoading = () =>
createSelector(selectCandidatesPageDomain, (substate) =>
  substate.get('loadingPutCandidate')
);
const makeSelectSelectCandidateError = () =>
createSelector(selectCandidatesPageDomain, (substate) =>
  substate.get('errorPutCandidate')
);

export {
  makeSelectCandidates,
  makeSelectCandidatesLoading,
  makeSelectCandidatesError,
  makeSelectSelectCandidate,
  makeSelectSelectCandidateLoading,
  makeSelectSelectCandidateError,
};
