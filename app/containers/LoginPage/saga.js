import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginLoaded, loginError } from './actions';
import { LOGIN } from './constants';


export function* loginPut(action) {
  const loginReference = 'https://rent-a-coder-api.herokuapp.com/auth/sign_in';
  console.log(JSON.stringify({
    ...action.content,
  }));

  try {
    yield call(request, loginReference, {
      method: 'POST',
      body: JSON.stringify({
        ...action.content,
      }),
    });
    yield put(loginLoaded(action.content));
  } catch (err) {
    yield put(loginError(err));
  }
}

export default function* login() {
  yield takeLatest(LOGIN, loginPut);
}

// export default [login];
