import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('loginPage');

const makeSelectLogin = () =>
  createSelector(selectGlobal, (substate) =>
    substate.get('responseLogin')
  );
const makeSelectLoginLoading = () =>
  createSelector(selectGlobal, (substate) =>
    substate.get('loadingLogin')
  );
const makeSelectLoginError = () =>
  createSelector(selectGlobal, (substate) =>
    substate.get('errorLogin')
  );

export {
  makeSelectLogin,
  makeSelectLoginLoading,
  makeSelectLoginError,
};
