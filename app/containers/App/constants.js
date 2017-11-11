/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const SESSION_TOKEN = 'Access-Token';
export const SESSION_CLIENT = 'Client';
export const SESSION_UID = 'Uid';

export const GET_TECHNOLOGIES = 'app/PublishProjectPage/GET_TECHNOLOGIES';
export const GET_TECHNOLOGIES_SUCCESS = 'app/PublishProjectPage/GET_TECHNOLOGIES_SUCCESS';
export const GET_TECHNOLOGIES_ERROR = 'app/PublishProjectPage/GET_TECHNOLOGIES_ERROR';
