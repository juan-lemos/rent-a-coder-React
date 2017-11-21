import request from 'utils/request';
import requestWithHeaders from 'utils/requestHeaderBody';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getTechnologies } from 'containers/App/saga';
import { SESSION_TOKEN, SESSION_CLIENT, SESSION_UID, GET_TECHNOLOGIES } from 'containers/App/constants';
import { getSessionToken, getSessionClient, getSessionUid } from 'containers/App/session';
import {
  profileLoaded,
  profileError,
  postProfileModificationError,
  postProfileModificationLoaded,
} from './actions';
import { PROFILE, POST_MODIFICATION } from './constants';

export function* profileGet() {
  const profileReference = 'https://rent-a-coder-api.herokuapp.com/profile';
  const requestHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  requestHeaders[SESSION_TOKEN] = getSessionToken();
  requestHeaders[SESSION_CLIENT] = getSessionClient();
  requestHeaders[SESSION_UID] = getSessionUid();

  try {
    const response = yield call(request, profileReference, {
      method: 'GET',
      headers: requestHeaders,
    });
    yield put(profileLoaded(response));
  } catch (err) {
    yield put(profileError(err));
  }
}

export function* modificationProfilePut(action) {
  const modificationReference = 'https://rent-a-coder-api.herokuapp.com/users';
  const requestHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  requestHeaders[SESSION_TOKEN] = getSessionToken();
  requestHeaders[SESSION_CLIENT] = getSessionClient();
  requestHeaders[SESSION_UID] = getSessionUid();
  try {
    const response = yield call(requestWithHeaders, modificationReference, {
      method: 'PATCH',
      headers: requestHeaders,
      body: JSON.stringify({
        ...action.content,
      }),
    });
    yield put(postProfileModificationLoaded(response));
  } catch (err) {
    const error = yield Promise.resolve(err);
    yield put(postProfileModificationError(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(PROFILE, profileGet),
    takeLatest(GET_TECHNOLOGIES, getTechnologies),
    takeLatest(POST_MODIFICATION, modificationProfilePut),
  ]);
}
