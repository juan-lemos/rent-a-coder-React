import { createSelector } from 'reselect';

const selectModifyProjectPageDomain = (state) => state.get('modifyProjectPage');

const makeSelectProject = () =>
createSelector(selectModifyProjectPageDomain, (substate) =>
  substate.get('responseProject')
);

const makeSelectProjectLoading = () =>
createSelector(selectModifyProjectPageDomain, (substate) =>
  substate.get('loadingProject')
);
const makeSelectProjectError = () =>
createSelector(selectModifyProjectPageDomain, (substate) =>
  substate.get('errorProject')
);


const makeSelectpostProjectModify = () =>
createSelector(selectModifyProjectPageDomain, (substate) =>
  substate.get('responsePostModification')
);
const makeSelectpostProjectModifyLoading = () =>
createSelector(selectModifyProjectPageDomain, (substate) =>
  substate.get('loadingPostModification')
);
const makeSelectpostProjectModifyError = () =>
createSelector(selectModifyProjectPageDomain, (substate) =>
  substate.get('errorPostModification')
);


export {
  makeSelectProject,
  makeSelectProjectLoading,
  makeSelectProjectError,
  makeSelectpostProjectModify,
  makeSelectpostProjectModifyLoading,
  makeSelectpostProjectModifyError,
};
