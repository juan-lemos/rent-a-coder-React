import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
} from './constants';

export function getProjects() {
  return {
    type: GET_PROJECTS,
  };
}

export function getProjectsLoaded(content) {
  return {
    type: GET_PROJECTS_SUCCESS,
    content,
  };
}

export function getProjectsError(error) {
  return {
    type: GET_PROJECTS_ERROR,
    error,
  };
}
