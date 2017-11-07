import { createSelector } from 'reselect';

/**
 * Direct selector to the candidatesPage state domain
 */
const selectCandidatesPageDomain = (state) => state.get('candidatesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CandidatesPage
 */

const makeSelectCandidatesPage = () => createSelector(
  selectCandidatesPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectCandidatesPage;
export {
  selectCandidatesPageDomain,
};
