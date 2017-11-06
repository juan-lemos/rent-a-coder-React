import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  PUT_OFFER,
  PUT_OFFER_SUCCESS,
  PUT_OFFER_ERROR,
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

export function putOffer(content) {
  return {
    type: PUT_OFFER,
    content,
  };
}

export function putOfferLoaded(content) {
  return {
    type: PUT_OFFER_SUCCESS,
    content,
  };
}

export function putOfferError(error) {
  return {
    type: PUT_OFFER_ERROR,
    error,
  };
}
