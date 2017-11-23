import { fromJS } from 'immutable';

import {
  PROFILE,
  PROFILE_SUCCESS,
  PUT_DEVELOPED_PROJECT_RATE,
  PUT_DEVELOPED_PROJECT_RATE_ERROR,
  PUT_DEVELOPED_PROJECT_RATE_SUCCESS,
  PUT_OWNED_PROJECT_RATE,
  PUT_OWNED_PROJECT_RATE_ERROR,
  PUT_OWNED_PROJECT_RATE_SUCCESS,
} from './constants';

const initialState = fromJS({
  userData: {},
  loadingPut: false,
});

function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE:
      return state;
    case PROFILE_SUCCESS:
      return state
        .set('userData', action.content.user);
    case PUT_DEVELOPED_PROJECT_RATE:
      return state
        .set('loadingPut', true);
    case PUT_DEVELOPED_PROJECT_RATE_ERROR:
      return state
        .set('loadingPut', false);
    case PUT_DEVELOPED_PROJECT_RATE_SUCCESS:
      return state
        .set('loadingPut', false);
    case PUT_OWNED_PROJECT_RATE:
      return state
        .set('loadingPut', true);
    case PUT_OWNED_PROJECT_RATE_ERROR:
      return state
        .set('loadingPut', false);
    case PUT_OWNED_PROJECT_RATE_SUCCESS:
      return state
        .set('loadingPut', false);
    default:
      return state;
  }
}

export default profilePageReducer;
