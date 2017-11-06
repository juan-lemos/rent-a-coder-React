import { createSelector } from 'reselect';

const selectPublishProjectPageDomain = (state) => state.get('publishProjectPage');

const makeSelectTechnologies = () =>
  createSelector(selectPublishProjectPageDomain, (substate) =>
    substate.get('responseTechnologies')
  );
const makeSelectTechnologiesLoading = () =>
  createSelector(selectPublishProjectPageDomain, (substate) =>
    substate.get('loadingTechnologies')
  );
const makeSelectTechnologiesError = () =>
  createSelector(selectPublishProjectPageDomain, (substate) =>
    substate.get('errorTechnologies')
  );

const makeSelectProject = () =>
  createSelector(selectPublishProjectPageDomain, (substate) =>
    substate.get('responsePutProject')
  );
const makeSelectProjectLoading = () =>
  createSelector(selectPublishProjectPageDomain, (substate) =>
    substate.get('loadingPutProject')
  );
const makeSelectProjectError = () =>
  createSelector(selectPublishProjectPageDomain, (substate) =>
    substate.get('errorPutProject')
  );

export {
  makeSelectTechnologies,
  makeSelectTechnologiesLoading,
  makeSelectTechnologiesError,
  makeSelectProject,
  makeSelectProjectLoading,
  makeSelectProjectError,
};
