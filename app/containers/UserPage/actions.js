import {
  USER,
  USER_SUCCESS,
  USER_ERROR,
} from './constants';

export function user(content) {
  return {
    type: USER,
    content,
  };
}

export function userLoaded(content) {
  return {
    type: USER_SUCCESS,
    content,
  };
}

export function userError(error) {
  return {
    type: USER_ERROR,
    error,
  };
}
