import { fromJS } from 'immutable';
import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  PUT_OFFER,
  PUT_OFFER_SUCCESS,
  PUT_OFFER_ERROR,
  CLEAN_PUT_OFFER,
} from './constants';

const initialState = fromJS({
  loadingProjects: false,
  errorProjects: null,
  responseProjects: null,
  loadingPutOffer: false,
  errorPutOffer: null,
  responsePutOffer: null,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return state
        .set('loadingProjects', true)
        .set('errorProjects', null)
        .set('responseProjects', null);
    case GET_PROJECTS_SUCCESS:
      return state
        .set('loadingProjects', false)
        .set('responseProjects', action.content);
    case GET_PROJECTS_ERROR:
      return state
        .set('loadingProjects', false)
        .set('errorProjects', action.error);
    case PUT_OFFER:
      return state
        .set('loadingPutOffer', true)
        .set('errorPutOffer', null)
        .set('responsePutOffer', null);
    case PUT_OFFER_SUCCESS:
      return state
        .set('loadingPutOffer', false)
        .set('responsePutOffer', action.content);
    case PUT_OFFER_ERROR:
      return state
        .set('loadingPutOffer', false)
        .set('errorPutOffer', action.error);
    case CLEAN_PUT_OFFER:
      return state
        .set('loadingPutOffer', false)
        .set('errorPutOffer', null)
        .set('responsePutOffer', null);
    default:
      return state;
  }
}

export default homePageReducer;
