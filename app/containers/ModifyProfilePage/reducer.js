import { fromJS } from 'immutable';
import {
  setSessionToken,
  setSessionClient,
  setSessionUid,
}
  from 'containers/App/session';

import {
  SESSION_TOKEN,
  SESSION_CLIENT,
  SESSION_UID,
}
  from 'containers/App/constants';

import {
  PROFILE,
  PROFILE_SUCCESS,
  PROFILE_ERROR,
  POST_MODIFICATION,
  POST_MODIFICATION_SUCCESS,
  POST_MODIFICATION_ERROR,
  CLEAN_POST_MODIFICATION,
} from './constants';

const initialState = fromJS({
  loadingProfile: false,
  errorProfile: false,
  responseProfile: null,
  loadingPostModification: false,
  errorPostModification: null,
  responsePostModification: null,
});

function modifyProfilePageReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE:
      return state
        .set('loadingProfile', true)
        .set('errorProfile', false)
        .set('responseProfile', null);
    case PROFILE_SUCCESS:
      return state
        .set('loadingProfile', false)
        .set('responseProfile', action.content);
    case PROFILE_ERROR:
      return state
        .set('loadingProfile', false)
        .set('errorProfile', true);
    case POST_MODIFICATION:
      return state
        .set('loadingPostModification', true)
        .set('errorPostModification', null)
        .set('responsePostModification', null);
    case POST_MODIFICATION_SUCCESS:
      setSessionToken(action.content.header.get(SESSION_TOKEN));
      setSessionClient(action.content.header.get(SESSION_CLIENT));
      setSessionUid(action.content.header.get(SESSION_UID));
      return state
        .set('loadingPostModification', false)
        .set('responsePostModification', action.content.body);
    case POST_MODIFICATION_ERROR:
      return state
        .set('loadingPostModification', false)
        .set('errorPostModification', action.error);
    case CLEAN_POST_MODIFICATION:
      return state
        .set('loadingPostModification', true)
        .set('errorPostModification', null)
        .set('responsePostModification', null);
    default:
      return state;
  }
}

export default modifyProfilePageReducer;
