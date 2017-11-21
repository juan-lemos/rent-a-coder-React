import { createSelector } from 'reselect';

const selectUserPageDomain = (state) => state.get('userPage');

const makeSelectUserData = () =>
  createSelector(selectUserPageDomain, (substate) =>
    substate.get('userData')
  );

const makeSelectUserError = () =>
  createSelector(selectUserPageDomain, (substate) =>
    substate.get('errorUser')
  );

export {
  makeSelectUserData,
  makeSelectUserError,
};
