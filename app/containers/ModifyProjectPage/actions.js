import {
  GET_PROJECT,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_ERROR,
  POST_PROJECT_MODIFICATION,
  POST_PROJECT_MODIFICATION_SUCCESS,
  POST_PROJECT_MODIFICATION_ERROR,
  CLEAN_POST_PROJECT_MODIFICATION,
} from './constants';


export function getProject(content) {
  return {
    type: GET_PROJECT,
    content,
  };
}

export function getProjectLoaded(content) {
  return {
    type: GET_PROJECT_SUCCESS,
    content,
  };
}

export function getProjectError(error) {
  return {
    type: GET_PROJECT_ERROR,
    error,
  };
}

export function postProjectModification(content) {
  return {
    type: POST_PROJECT_MODIFICATION,
    content,
  };
}

export function postProjectModificationLoaded(content) {
  return {
    type: POST_PROJECT_MODIFICATION_SUCCESS,
    content,
  };
}

export function postProjectModificationError(error) {
  return {
    type: POST_PROJECT_MODIFICATION_ERROR,
    error,
  };
}

export function cleanPostProjectModification() {
  return {
    type: CLEAN_POST_PROJECT_MODIFICATION,
  };
}
