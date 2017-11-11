import request from 'utils/requestHeaderBody';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { GET_TECHNOLOGIES } from 'containers/App/constants';
import { getTechnologies } from 'containers/App/saga';
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
    const error = yield Promise.resolve(err);
    yield put(registerError(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(REGISTER, registerPut),
    takeLatest(GET_TECHNOLOGIES, getTechnologies),
  ]);
}

