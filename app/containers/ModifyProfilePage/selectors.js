import { createSelector } from 'reselect';

/**
 * Direct selector to the modifyProfilePage state domain
 */
const selectModifyProfilePageDomain = (state) => state.get('modifyProfilePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ModifyProfilePage
 */

const makeSelectModifyProfilePage = () => createSelector(
  selectModifyProfilePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectModifyProfilePage;
export {
  selectModifyProfilePageDomain,
};
