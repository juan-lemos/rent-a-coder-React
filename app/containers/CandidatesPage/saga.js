import request from 'utils/request';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { SESSION_TOKEN, SESSION_CLIENT, SESSION_UID } from 'containers/App/constants';
import { getSessionToken, getSessionClient, getSessionUid } from 'containers/App/session';
import {
  getCandidatesLoaded,
  getCandidatesError,
  putSelectCandidateLoaded,
  putSelectCandidateError,
} from './actions';
import { GET_CANDIDATES, PUT_SELECT_CANDIDATE } from './constants';

export function* getCandidates(action) {
  const loginReference = `https://rent-a-coder-api.herokuapp.com/candidates/${action.content}`;
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
    yield put(getCandidatesLoaded(response));
  } catch (err) {
    yield put(getCandidatesError(err));
  }
}

export function* putSelectCandidate(action) {
  const loginReference = `https://rent-a-coder-api.herokuapp.com/projects/${action.content.projectId}/developer`;
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
        developer_id: action.content.developer_id,
      }),
    });
    yield put(putSelectCandidateLoaded(response));
  } catch (err) {
    const error = yield Promise.resolve(err);
    yield put(putSelectCandidateError(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_CANDIDATES, getCandidates),
    takeLatest(PUT_SELECT_CANDIDATE, putSelectCandidate),
  ]);
}
