import { createSelector } from 'reselect';

const selectHomePageDomain = (state) => state.get('homePage');

const makeSelectProjects = () =>
createSelector(selectHomePageDomain, (substate) =>
  substate.get('responseProjects')
);
const makeSelectProjectsLoading = () =>
createSelector(selectHomePageDomain, (substate) =>
  substate.get('loadingProjects')
);
const makeSelectProjectsError = () =>
createSelector(selectHomePageDomain, (substate) =>
  substate.get('errorProjects')
);

export {
  makeSelectProjects,
  makeSelectProjectsLoading,
  makeSelectProjectsError,
};
