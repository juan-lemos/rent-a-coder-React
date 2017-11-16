import {
  SESSION_TOKEN,
  SESSION_CLIENT,
  SESSION_UID,
}
  from './constants';

export function setSessionToken(token) {
  sessionStorage.setItem(SESSION_TOKEN, token);
}

export function setSessionClient(client) {
  sessionStorage.setItem(SESSION_CLIENT, client);
}

export function setSessionUid(uid) {
  sessionStorage.setItem(SESSION_UID, uid);
}

export function getSessionToken() {
  return sessionStorage.getItem(SESSION_TOKEN);
}

export function getSessionClient() {
  return sessionStorage.getItem(SESSION_CLIENT);
}

export function getSessionUid() {
  return sessionStorage.getItem(SESSION_UID);
}
export function resetLogginVariables() {
  setSessionUid(null);
  setSessionClient(null);
  setSessionToken(null);
}
