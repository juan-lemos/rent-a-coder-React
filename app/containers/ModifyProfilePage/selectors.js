import { createSelector } from 'reselect';

/**
 * Direct selector to the modifyProfilePage state domain
 */
const selectModifyProfilePageDomain = (state) => state.get('modifyProfilePage');

const makeSelectProfile = () =>
  createSelector(selectModifyProfilePageDomain, (substate) =>
    substate.get('responseProfile')
  );

const makeSelectProfileLoading = () =>
  createSelector(selectModifyProfilePageDomain, (substate) =>
    substate.get('loadingProfile')
  );
const makeSelectProfileError = () =>
  createSelector(selectModifyProfilePageDomain, (substate) =>
    substate.get('errorProfile')
  );


const makeSelectpostProfileModify = () =>
  createSelector(selectModifyProfilePageDomain, (substate) =>
    substate.get('responsePostModification')
  );
const makeSelectpostProfileModifyLoading = () =>
  createSelector(selectModifyProfilePageDomain, (substate) =>
    substate.get('loadingPostModification')
  );
const makeSelectpostProfileModifyError = () =>
  createSelector(selectModifyProfilePageDomain, (substate) =>
    substate.get('errorPostModification')
  );

export {
  makeSelectProfile,
  makeSelectProfileLoading,
  makeSelectProfileError,
  makeSelectpostProfileModify,
  makeSelectpostProfileModifyLoading,
  makeSelectpostProfileModifyError,
};
