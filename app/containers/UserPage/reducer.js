import { fromJS } from 'immutable';

import {
  USER,
  USER_SUCCESS,
} from './constants';

const initialState = fromJS({
  userData: {},
});

function userPageReducer(state = initialState, action) {
  switch (action.type) {
    case USER:
      return state;
    case USER_SUCCESS:
      return state
        .set('userData', action.content.user);
    default:
      return state;
  }
}

export default userPageReducer;
