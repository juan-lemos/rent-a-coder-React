import request from 'utils/request';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getSessionToken, getSessionClient, getSessionUid } from 'containers/App/session';
import { SESSION_TOKEN, SESSION_CLIENT, SESSION_UID } from 'containers/App/constants';

import { userLoaded, userError } from './actions';
import { USER } from './constants';

export function* userGet(userId) {
  const profileReference = `https://rent-a-coder-api.herokuapp.com/users/${userId.content}`;
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
    yield put(userLoaded(response));
  } catch (err) {
    yield put(userError(err));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(USER, userGet),
  ]);
}
