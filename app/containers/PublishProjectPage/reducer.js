import { fromJS } from 'immutable';

import {
  GET_TECHNOLOGIES,
  GET_TECHNOLOGIES_SUCCESS,
  GET_TECHNOLOGIES_ERROR,
  PUT_PROJECT,
  PUT_PROJECT_SUCCESS,
  PUT_PROJECT_ERROR,
  CLEAN_PUT_PROJECT,
} from './constants';

const initialState = fromJS({
  loadingTechnologies: false,
  errorTechnologies: false,
  responseTechnologies: null,
  loadingPutProject: false,
  errorPutProject: null,
  responsePutProject: null,
});

const modifiedContent = [];

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TECHNOLOGIES:
      return state
        .set('loadingTechnologies', true)
        .set('errorTechnologies', false)
        .set('responseTechnologies', null);
    case GET_TECHNOLOGIES_SUCCESS:
      action.content.forEach((element) => {
        modifiedContent.push({ value: element.id, label: element.name });
      }
      );
      return state
        .set('loadingTechnologies', false)
        .set('responseTechnologies', modifiedContent);
    case GET_TECHNOLOGIES_ERROR:
      return state
        .set('loadingTechnologies', false)
        .set('errorTechnologies', true);
    case PUT_PROJECT:
      return state
        .set('loadingPutProject', true)
        .set('errorPutProject', null)
        .set('responsePutProject', null);
    case PUT_PROJECT_SUCCESS:
      return state
        .set('loadingPutProject', false)
        .set('responsePutProject', action.content);
    case PUT_PROJECT_ERROR:
      return state
        .set('loadingPutProject', false)
        .set('errorPutProject', action.error);
    case CLEAN_PUT_PROJECT:
      return state
        .set('loadingPutProject', false)
        .set('errorPutProject', null)
        .set('responsePutProject', null);
    default:
      return state;
  }
}

export default loginPageReducer;
