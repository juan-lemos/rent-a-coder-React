import { fromJS } from 'immutable';

import {
  setSessionToken,
  setSessionClient,
  setSessionUid,
}
  from 'containers/App/sessionSetters';

import {
  SESSION_TOKEN,
  SESSION_CLIENT,
  SESSION_UID,
}
  from 'containers/App/constants';

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
      setSessionToken(action.content.header.get(SESSION_TOKEN));
      setSessionClient(action.content.header.get(SESSION_CLIENT));
      setSessionUid(action.content.header.get(SESSION_UID));
      return state
        .set('loadingLogin', false)
        .set('responseLogin', action.content.body);
    case LOGIN_ERROR:
      return state
        .set('loadingLogin', false)
        .set('errorLogin', true);
    default:
      return state;
  }
}

export default loginPageReducer;
