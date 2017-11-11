import { createSelector } from 'reselect';

/**
 * Direct selector to the modifyProfile state domain
 */
const selectModifyProfileDomain = (state) => state.get('modifyProfile');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ModifyProfile
 */

const makeSelectModifyProfile = () => createSelector(
  selectModifyProfileDomain,
  (substate) => substate.toJS()
);

export default makeSelectModifyProfile;
export {
  selectModifyProfileDomain,
};
