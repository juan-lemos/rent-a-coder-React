import request from 'utils/request';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { SESSION_TOKEN, SESSION_CLIENT, SESSION_UID, GET_TECHNOLOGIES } from 'containers/App/constants';
import { getSessionToken, getSessionClient, getSessionUid } from 'containers/App/session';
import { getTechnologies } from 'containers/App/saga';
import {
  putProjectLoaded,
  putProjectError,
} from './actions';
import { PUT_PROJECT } from './constants';


export function* putProject(action) {
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
      method: 'POST',
      headers: {
        ...requestHeaders,
      },
      body: JSON.stringify({
        ...action.content,
      }),
    });
    yield put(putProjectLoaded(response));
  } catch (err) {
    const error = yield Promise.resolve(err);
    yield put(putProjectError(error));
  }
}


export default function* rootSaga() {
  yield all([
    takeLatest(GET_TECHNOLOGIES, getTechnologies),
    takeLatest(PUT_PROJECT, putProject),
  ]);
}

