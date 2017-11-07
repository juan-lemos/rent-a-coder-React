import request from 'utils/request';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { SESSION_TOKEN, SESSION_CLIENT, SESSION_UID } from 'containers/App/constants';
import { getSessionToken, getSessionClient, getSessionUid } from 'containers/App/session';
import {
  getProjectsLoaded,
  getProjectsError,
  putOfferLoaded,
  putOfferError,
} from './actions';
import { GET_PROJECTS, PUT_OFFER } from './constants';

export function* getProjects() {
  const loginReference = 'https://rent-a-coder-api.herokuapp.com/projects';
  const requestHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  requestHeaders[SESSION_TOKEN] = getSessionToken();
  requestHeaders[SESSION_CLIENT] = getSessionClient();
  requestHeaders[SESSION_UID] = getSessionUid();

  try {
    const response = yield call(request, loginReference, {
      method: 'GET',
      headers: {
        ...requestHeaders,
      },
    });
    yield put(getProjectsLoaded(response));
  } catch (err) {
    yield put(getProjectsError(err));
  }
}

export function* putOffer(action) {
  const loginReference = 'https://rent-a-coder-api.herokuapp.com/offers';
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
        ...action.content,
      }),
    });
    yield put(putOfferLoaded(response));
  } catch (err) {
    const error = yield Promise.resolve(err);
    yield put(putOfferError(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_PROJECTS, getProjects),
    takeLatest(PUT_OFFER, putOffer),
  ]);
}
