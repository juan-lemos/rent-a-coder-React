import { createSelector } from 'reselect';

const selectPublishProjectPageDomain = (state) => state.get('publishProjectPage');

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
  makeSelectProject,
  makeSelectProjectLoading,
  makeSelectProjectError,
};
