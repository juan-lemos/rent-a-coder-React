import { createSelector } from 'reselect';
import { SESSION_CLIENT, SESSION_TOKEN, SESSION_UID } from './constants';


const selectRoute = (state) => state.get('route');

const makeSelectSessionToken = () => sessionStorage.getItem(SESSION_TOKEN);

const makeSelectSessionClient = () => sessionStorage.getItem(SESSION_CLIENT);

const makeSelectSessionUid = () => sessionStorage.getItem(SESSION_UID);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  makeSelectLocation,
  makeSelectSessionToken,
  makeSelectSessionClient,
  makeSelectSessionUid,
};
