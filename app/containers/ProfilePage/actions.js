import {
  PROFILE,
  PROFILE_SUCCESS,
  PROFILE_ERROR,
  PUT_OWNED_PROJECT_RATE,
  PUT_OWNED_PROJECT_RATE_SUCCESS,
  PUT_OWNED_PROJECT_RATE_ERROR,
  PUT_DEVELOPED_PROJECT_RATE,
  PUT_DEVELOPED_PROJECT_RATE_SUCCESS,
  PUT_DEVELOPED_PROJECT_RATE_ERROR,
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


export function putOwnedProjectRate(content) {
  return {
    type: PUT_OWNED_PROJECT_RATE,
    content,
  };
}

export function putOwnedProjectRateLoaded(content) {
  return {
    type: PUT_OWNED_PROJECT_RATE_SUCCESS,
    content,
  };
}

export function putOwnedProjectRateError(error) {
  return {
    type: PUT_OWNED_PROJECT_RATE_ERROR,
    error,
  };
}

export function putDevelopedProjectRate(content) {
  return {
    type: PUT_DEVELOPED_PROJECT_RATE,
    content,
  };
}

export function putDevelopedProjectRateLoaded(content) {
  return {
    type: PUT_DEVELOPED_PROJECT_RATE_SUCCESS,
    content,
  };
}

export function putDevelopedProjectRateError(error) {
  return {
    type: PUT_DEVELOPED_PROJECT_RATE_ERROR,
    error,
  };
}
