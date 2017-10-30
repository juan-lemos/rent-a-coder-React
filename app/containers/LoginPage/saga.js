import request from 'utils/requestHeaderBody';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { loginLoaded, loginError } from 'containers/App/actions';
import { LOGIN } from 'containers/App/constants';

export function* loginPut(action) {
  const loginReference = 'https://rent-a-coder-api.herokuapp.com/auth/sign_in';
  try {
    const response = yield call(request, loginReference, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...action.content,
      }),
    });
    yield put(loginLoaded(response));
  } catch (err) {
    yield put(loginError(err));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, loginPut),
  ]);
}

