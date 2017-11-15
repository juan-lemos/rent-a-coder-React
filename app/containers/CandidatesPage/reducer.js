import { fromJS } from 'immutable';
import {
  GET_CANDIDATES,
  GET_CANDIDATES_SUCCESS,
  GET_CANDIDATES_ERROR,
  PUT_SELECT_CANDIDATE,
  PUT_SELECT_CADIDATE_SUCCESS,
  PUT_SELECT_CANDIDATE_ERROR,
  CLEAN_PUT_SELECT_CANDIDATE,
} from './constants';

const initialState = fromJS({
  loadingCandidates: false,
  errorCandidates: false,
  responseCandidates: null,
  loadingPutCandidate: false,
  errorPutCandidate: null,
  responsePutCandidate: null,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATES:
      return state
        .set('loadingCandidates', true)
        .set('errorCandidates', false)
        .set('responseCandidates', null);
    case GET_CANDIDATES_SUCCESS:
      return state
        .set('loadingCandidates', false)
        .set('responseCandidates', action.content);
    case GET_CANDIDATES_ERROR:
      return state
        .set('loadingCandidates', false)
        .set('errorCandidates', true);
    case PUT_SELECT_CANDIDATE:
      return state
        .set('loadingPutCandidate', true)
        .set('errorPutCandidate', null)
        .set('responsePutCandidate', null);
    case PUT_SELECT_CADIDATE_SUCCESS:
      return state
        .set('loadingPutCandidate', false)
        .set('responsePutCandidate', action.content);
    case PUT_SELECT_CANDIDATE_ERROR:
      return state
        .set('loadingPutCandidate', false)
        .set('errorPutCandidate', action.error);
    case CLEAN_PUT_SELECT_CANDIDATE:
      return state
        .set('loadingPutCandidate', false)
        .set('errorPutCandidate', null)
        .set('responsePutCandidate', null);
    default:
      return state;
  }
}

export default homePageReducer;
