import { createSelector } from 'reselect';

/**
 * Direct selector to the modifyProjectPage state domain
 */
const selectModifyProjectPageDomain = (state) => state.get('modifyProjectPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ModifyProjectPage
 */

const makeSelectModifyProjectPage = () => createSelector(
  selectModifyProjectPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectModifyProjectPage;
export {
  selectModifyProjectPageDomain,
};
