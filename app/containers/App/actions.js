/*
 *
 * LoginPage actions
 *
 */

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export function login(content) {
  return {
    type: LOGIN,
    content,
  };
}

export function loginLoaded(content) {
  console.log(content);
  return {
    type: LOGIN_SUCCESS,
    content,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
