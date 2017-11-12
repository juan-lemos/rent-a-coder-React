import {
  GET_TECHNOLOGIES,
  GET_TECHNOLOGIES_SUCCESS,
  GET_TECHNOLOGIES_ERROR,
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

