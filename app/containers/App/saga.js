import request from 'utils/request';
import { call, put } from 'redux-saga/effects';
import { SESSION_TOKEN, SESSION_CLIENT, SESSION_UID } from 'containers/App/constants';
import { getSessionToken, getSessionClient, getSessionUid } from 'containers/App/session';
import {
  getTechnologiesLoaded,
  getTechnologiesError,
} from './actions';

export function* getTechnologies() {
  const loginReference = 'https://rent-a-coder-api.herokuapp.com/technologies';
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
    yield put(getTechnologiesLoaded(response));
  } catch (err) {
    yield put(getTechnologiesError(err));
  }
}

