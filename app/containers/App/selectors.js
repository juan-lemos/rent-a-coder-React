import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');

const selectGlobal = (state) => state.get('global');

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


const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  makeSelectLocation,
  makeSelectLogin,
  makeSelectLoginLoading,
  makeSelectLoginError,
};
