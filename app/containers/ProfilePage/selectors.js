import { createSelector } from 'reselect';

const selectProfilePageDomain = (state) => state.get('profilePage');

const makeSelectProfile = () =>
  createSelector(selectProfilePageDomain, (substate) =>
    substate.get('responseProfile')
  );

const makeSelectProfileError = () =>
  createSelector(selectProfilePageDomain, (substate) =>
    substate.get('errorProfile')
  );

export {
  makeSelectProfile,
  makeSelectProfileError,
};
