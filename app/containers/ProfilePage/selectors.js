import { createSelector } from 'reselect';

const selectProfilePageDomain = (state) => state.get('profilePage');

const makeSelectUserData = () =>
  createSelector(selectProfilePageDomain, (substate) =>
    substate.get('userData')
  );

const makeSelectProfileError = () =>
  createSelector(selectProfilePageDomain, (substate) =>
    substate.get('errorProfile')
  );

const makeSelectLoadingPut = () =>
  createSelector(selectProfilePageDomain, (substate) =>
    substate.get('loadingPut')
  );

export {
  makeSelectUserData,
  makeSelectProfileError,
  makeSelectLoadingPut,
};
