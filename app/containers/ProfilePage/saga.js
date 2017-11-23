import request from 'utils/request';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getSessionToken, getSessionClient, getSessionUid } from 'containers/App/session';
import { SESSION_TOKEN, SESSION_CLIENT, SESSION_UID } from 'containers/App/constants';

import {
  profileLoaded,
  profileError,
  putOwnedProjectRateLoaded,
  putOwnedProjectRateError,
  putDevelopedProjectRateLoaded,
  putDevelopedProjectRateError,
} from './actions';
import { PROFILE, PUT_OWNED_PROJECT_RATE, PUT_DEVELOPED_PROJECT_RATE } from './constants';

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

export function* putOwnedProjectRate(action) {
  const loginReference = `https://rent-a-coder-api.herokuapp.com/projects/${action.content.projectId}/developer_score`;
  const requestHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  requestHeaders[SESSION_TOKEN] = getSessionToken();
  requestHeaders[SESSION_CLIENT] = getSessionClient();
  requestHeaders[SESSION_UID] = getSessionUid();

  try {
    const response = yield call(request, loginReference, {
      method: 'POST',
      headers: {
        ...requestHeaders,
      },
      body: JSON.stringify({
        score: action.content.developerScore,
      }),
    });
    yield put(putOwnedProjectRateLoaded(response));
  } catch (err) {
    const error = yield Promise.resolve(err);
    yield put(putOwnedProjectRateError(error));
  }
}

export function* putDevelopedProjectRate(action) {
  const loginReference = `https://rent-a-coder-api.herokuapp.com/projects/${action.content.projectId}/owner_score`;
  const requestHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  requestHeaders[SESSION_TOKEN] = getSessionToken();
  requestHeaders[SESSION_CLIENT] = getSessionClient();
  requestHeaders[SESSION_UID] = getSessionUid();

  try {
    const response = yield call(request, loginReference, {
      method: 'POST',
      headers: {
        ...requestHeaders,
      },
      body: JSON.stringify({
        score: action.content.ownerScore,
      }),
    });
    yield put(putDevelopedProjectRateLoaded(response));
  } catch (err) {
    const error = yield Promise.resolve(err);
    yield put(putDevelopedProjectRateError(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(PROFILE, profileGet),
    takeLatest(PUT_OWNED_PROJECT_RATE, putOwnedProjectRate),
    takeLatest(PUT_DEVELOPED_PROJECT_RATE, putDevelopedProjectRate),
  ]);
}
