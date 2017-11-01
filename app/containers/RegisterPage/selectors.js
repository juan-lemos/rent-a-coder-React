import { createSelector } from 'reselect';

const selectRegisterPageDomain = (state) => state.get('registerPage');

const makeSelectRegister = () =>
  createSelector(selectRegisterPageDomain, (substate) =>
    substate.get('responseRegister')
  );
const makeSelectRegisterLoading = () =>
  createSelector(selectRegisterPageDomain, (substate) =>
    substate.get('loadingRegister')
  );
const makeSelectRegisterError = () =>
  createSelector(selectRegisterPageDomain, (substate) =>
    substate.get('errorRegister')
  );

export {
  makeSelectRegister,
  makeSelectRegisterLoading,
  makeSelectRegisterError,
};
