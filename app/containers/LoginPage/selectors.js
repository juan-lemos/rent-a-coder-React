import { createSelector } from 'reselect';

const selectLoginPageDomain = (state) => state.get('loginPage');

const makeSelectLogin = () =>
  createSelector(selectLoginPageDomain, (substate) =>
    substate.get('responseLogin')
  );
const makeSelectLoginLoading = () =>
  createSelector(selectLoginPageDomain, (substate) =>
    substate.get('loadingLogin')
  );
const makeSelectLoginError = () =>
  createSelector(selectLoginPageDomain, (substate) =>
    substate.get('errorLogin')
  );

export {
  makeSelectLogin,
  makeSelectLoginLoading,
  makeSelectLoginError,
};
