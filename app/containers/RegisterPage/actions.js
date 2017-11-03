import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './constants';

export function register(content) {
  return {
    type: REGISTER,
    content,
  };
}

export function registerLoaded(content) {
  return {
    type: REGISTER_SUCCESS,
    content,
  };
}

export function registerError(error) {
  console.log(error);
  return {
    type: REGISTER_ERROR,
    error,
  };
}
