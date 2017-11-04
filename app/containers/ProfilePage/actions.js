import {
  PROFILE,
  PROFILE_SUCCESS,
  PROFILE_ERROR,
} from './constants';

export function profile(content) {
  return {
    type: PROFILE,
    content,
  };
}

export function profileLoaded(content) {
  return {
    type: PROFILE_SUCCESS,
    content,
  };
}

export function profileError(error) {
  return {
    type: PROFILE_ERROR,
    error,
  };
}
