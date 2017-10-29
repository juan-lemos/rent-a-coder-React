import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginLoaded, loginError } from './actions';
import { LOGIN } from './constants';

export function* loginPut(action) {
  const loginReference = 'https://rent-a-coder-api.herokuapp.com/auth/sign_in';
  try {
    const response = yield call(request, loginReference, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        ...action.content,

        // email: 'jhon@hot.com',
        // password: '12345678',

      }),
    });
    yield put(loginLoaded(response));
  } catch (err) {
    yield put(loginError(err));
  }
}

export default function* login() {
  yield takeLatest(LOGIN, loginPut);
}

// export default [login];
