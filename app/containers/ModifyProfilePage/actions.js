import {
  PROFILE,
  PROFILE_SUCCESS,
  PROFILE_ERROR,
  POST_MODIFICATION,
  POST_MODIFICATION_SUCCESS,
  POST_MODIFICATION_ERROR,
  CLEAN_POST_MODIFICATION,
} from './constants';

export function getProfile() {
  return {
    type: PROFILE,
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

export function postProfileModification(content) {
  return {
    type: POST_MODIFICATION,
    content,
  };
}

export function postProfileModificationLoaded(content) {
  return {
    type: POST_MODIFICATION_SUCCESS,
    content,
  };
}

export function postProfileModificationError(error) {
  return {
    type: POST_MODIFICATION_ERROR,
    error,
  };
}

export function cleanPostProfileModification() {
  return {
    type: CLEAN_POST_MODIFICATION,
  };
}
