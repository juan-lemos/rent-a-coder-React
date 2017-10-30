import {
  SESSION_TOKEN,
  SESSION_CLIENT,
  SESSION_UID,
}
  from './constants';

export function setSessionToken(token) {
  sessionStorage.setItem(`${SESSION_TOKEN}`, token);
}

export function setSessionClient(client) {
  sessionStorage.setItem(`${SESSION_CLIENT}`, client);
}

export function setSessionUid(uid) {
  sessionStorage.setItem(`${SESSION_UID}`, uid);
}
