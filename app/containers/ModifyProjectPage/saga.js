import request from 'utils/request';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { SESSION_TOKEN, SESSION_CLIENT, SESSION_UID, GET_TECHNOLOGIES } from 'containers/App/constants';
import { getSessionToken, getSessionClient, getSessionUid } from 'containers/App/session';
import { getTechnologies } from 'containers/App/saga';
import { GET_PROJECT, POST_PROJECT_MODIFICATION } from './constants';

import {
  getProjectLoaded,
  getProjectError,
  postProjectModificationLoaded,
  postProjectModificationError,
} from './actions';


export function* getProject(action) {
  const loginReference = `https://rent-a-coder-api.herokuapp.com/projects/${action.content}`;
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
    yield put(getProjectLoaded(response));
  } catch (err) {
    const error = yield Promise.resolve(err);
    yield put(getProjectError(error));
  }
}


export function* putProject(action) {
  const loginReference = `https://rent-a-coder-api.herokuapp.com/projects/${action.content.projectId}`;
  const requestHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  requestHeaders[SESSION_TOKEN] = getSessionToken();
  requestHeaders[SESSION_CLIENT] = getSessionClient();
  requestHeaders[SESSION_UID] = getSessionUid();

  try {
    const response = yield call(request, loginReference, {
      method: 'PATCH',
      headers: {
        ...requestHeaders,
      },
      body: JSON.stringify({
        ...action.content.values,
      }),
    });
    yield put(postProjectModificationLoaded(response));
  } catch (err) {
    const error = yield Promise.resolve(err);
    yield put(postProjectModificationError(error));
  }
}


export default function* rootSaga() {
  yield all([
    takeLatest(GET_TECHNOLOGIES, getTechnologies),
    takeLatest(POST_PROJECT_MODIFICATION, putProject),
    takeLatest(GET_PROJECT, getProject),
  ]);
}

