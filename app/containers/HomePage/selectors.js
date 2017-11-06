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

const makeSelectOffer = () =>
createSelector(selectHomePageDomain, (substate) =>
  substate.get('responsePutOffer')
);
const makeSelectOfferLoading = () =>
createSelector(selectHomePageDomain, (substate) =>
  substate.get('loadingPutOffer')
);
const makeSelectOfferError = () =>
createSelector(selectHomePageDomain, (substate) =>
  substate.get('errorPutOffer')
);

export {
  makeSelectProjects,
  makeSelectProjectsLoading,
  makeSelectProjectsError,
  makeSelectOffer,
  makeSelectOfferLoading,
  makeSelectOfferError,
};
