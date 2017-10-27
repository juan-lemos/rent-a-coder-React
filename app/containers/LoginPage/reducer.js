/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

const initialState = fromJS({
  loadingLogin: false,
  errorLogin: false,
  responseLogin: null,
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state
        .set('loadingLogin', true)
        .set('errorLogin', false)
        .set('responseLogin', null);
    case LOGIN_SUCCESS:
      console.log('resp succ');
      return state
        .set('loadingLogin', false)
        .set('responseLogin', action.content);
    case LOGIN_ERROR:
      console.log('resp error');
      return state
        .set('loadingLogin', false)
        .set('errorLogin', action.error);
    default:
      return state;
  }
}

export default loginPageReducer;
