import { createSelector } from 'reselect';


const selectRoute = (state) => state.get('route');

const selectGlobal = (state) => state.get('global');

const makeSelectTechnologies = () =>
createSelector(selectGlobal, (substate) =>
  substate.get('responseTechnologies')
);

const makeSelectTechnologiesLoading = () =>
  createSelector(selectGlobal, (substate) =>
    substate.get('loadingTechnologies')
  );
const makeSelectTechnologiesError = () =>
  createSelector(selectGlobal, (substate) =>
    substate.get('errorTechnologies')
  );


const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  makeSelectLocation,
  makeSelectTechnologies,
  makeSelectTechnologiesLoading,
  makeSelectTechnologiesError,
};
