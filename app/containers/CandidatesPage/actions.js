import {
  GET_CANDIDATES,
  GET_CANDIDATES_SUCCESS,
  GET_CANDIDATES_ERROR,
  PUT_SELECT_CANDIDATE,
  PUT_SELECT_CADIDATE_SUCCESS,
  PUT_SELECT_CANDIDATE_ERROR,
  CLEAN_PUT_SELECT_CANDIDATE,
} from './constants';

export function getCandidates(content) {
  return {
    type: GET_CANDIDATES,
    content,
  };
}

export function getCandidatesLoaded(content) {
  return {
    type: GET_CANDIDATES_SUCCESS,
    content,
  };
}

export function getCandidatesError(error) {
  return {
    type: GET_CANDIDATES_ERROR,
    error,
  };
}

export function putSelectCandidate(content) {
  return {
    type: PUT_SELECT_CANDIDATE,
    content,
  };
}

export function putSelectCandidateLoaded(content) {
  return {
    type: PUT_SELECT_CADIDATE_SUCCESS,
    content,
  };
}

export function putSelectCandidateError(error) {
  return {
    type: PUT_SELECT_CANDIDATE_ERROR,
    error,
  };
}

export function cleanPutSelectCandidateerror() {
  return {
    type: CLEAN_PUT_SELECT_CANDIDATE,
  };
}

