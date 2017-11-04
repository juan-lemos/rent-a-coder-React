import request from 'utils/requestHeaderBody';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getSessionToken, getSessionClient, getSessionUid } from 'containers/App/session';
import { SESSION_TOKEN, SESSION_CLIENT, SESSION_UID } from 'containers/App/constants';

import { profileLoaded, profileError } from './actions';
import { PROFILE } from './constants';

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
    const error = yield Promise.resolve(err);
    yield put(profileError(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(PROFILE, profileGet),
  ]);
}
