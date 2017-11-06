import request from 'utils/request';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { SESSION_TOKEN, SESSION_CLIENT, SESSION_UID } from 'containers/App/constants';
import { getSessionToken, getSessionClient, getSessionUid } from 'containers/App/session';
import {
  getProjectsLoaded,
  getProjectsError,
} from './actions';
import { GET_PROJECTS } from './constants';

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

export default function* rootSaga() {
  yield all([
    takeLatest(GET_PROJECTS, getProjects),
  ]);
}
