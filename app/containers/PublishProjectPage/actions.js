import {
  GET_TECHNOLOGIES,
  GET_TECHNOLOGIES_SUCCESS,
  GET_TECHNOLOGIES_ERROR,
  PUT_PROJECT,
  PUT_PROJECT_SUCCESS,
  PUT_PROJECT_ERROR,
  CLEAN_PUT_PROJECT,
} from './constants';

export function getTechnologies() {
  return {
    type: GET_TECHNOLOGIES,
  };
}

export function getTechnologiesLoaded(content) {
  return {
    type: GET_TECHNOLOGIES_SUCCESS,
    content,
  };
}

export function getTechnologiesError(error) {
  return {
    type: GET_TECHNOLOGIES_ERROR,
    error,
  };
}

export function putProject(content) {
  return {
    type: PUT_PROJECT,
    content,
  };
}

export function putProjectLoaded(content) {
  return {
    type: PUT_PROJECT_SUCCESS,
    content,
  };
}

export function putProjectError(error) {
  return {
    type: PUT_PROJECT_ERROR,
    error,
  };
}

export function cleanPutStates() {
  return {
    type: CLEAN_PUT_PROJECT,
  };
}
