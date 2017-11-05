import { fromJS } from 'immutable';

import {
  PROFILE,
  PROFILE_SUCCESS,
} from './constants';

const initialState = fromJS({
  userData: {},
});

function registerPageReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE:
      return state;
    case PROFILE_SUCCESS:
      return state
        .set('userData', action.content);
    default:
      return state;
  }
}

export default registerPageReducer;
