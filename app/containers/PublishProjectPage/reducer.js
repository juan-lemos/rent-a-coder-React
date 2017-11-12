import { fromJS } from 'immutable';

import {
  PUT_PROJECT,
  PUT_PROJECT_SUCCESS,
  PUT_PROJECT_ERROR,
  CLEAN_PUT_PROJECT,
} from './constants';

const initialState = fromJS({
  loadingPutProject: false,
  errorPutProject: null,
  responsePutProject: null,
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
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
