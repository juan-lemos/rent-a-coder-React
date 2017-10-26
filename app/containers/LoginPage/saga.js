import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginLoaded, loginError } from './actions';
import { LOGIN } from './constants';


export function* loginPut(action) {
  const loginReference = 'https://rent-a-coder-api.herokuapp.com/auth/sign_in';

  try {
    yield call(request, loginReference, {
      method: 'POST',
      body: JSON.stringify({
        content: action.content,
      }),
    });
    yield put(loginLoaded(action.content));
  } catch (err) {
    yield put(loginError(err));
  }
}

export function* login() {
  yield takeLatest(LOGIN, loginPut);
}

export default [login];
