import request from 'utils/requestHeaderBody';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { registerLoaded, registerError } from './actions';
import { REGISTER } from './constants';

export function* registerPut(action) {
  const registerReference = 'https://rent-a-coder-api.herokuapp.com/auth';
  try {
    const response = yield call(request, registerReference, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...action.content,
      }),
    });
    yield put(registerLoaded(response));
  } catch (err) {
    yield put(registerError(err));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(REGISTER, registerPut),
  ]);
}

