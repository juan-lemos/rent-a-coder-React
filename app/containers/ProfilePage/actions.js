import {
  PROFILE,
  PROFILE_SUCCESS,
  PROFILE_ERROR,
  PUT_PROJECT_RATE,
  PUT_PROJECT_RATE_SUCCESS,
  PUT_PROJECT_RATE_ERROR,
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


export function putProjectRate(content) {
  return {
    type: PUT_PROJECT_RATE,
    content,
  };
}

export function putProjectRateLoaded(content) {
  return {
    type: PUT_PROJECT_RATE_SUCCESS,
    content,
  };
}

export function putProjectRateError(error) {
  return {
    type: PUT_PROJECT_RATE_ERROR,
    error,
  };
}
