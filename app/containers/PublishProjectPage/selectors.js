import { createSelector } from 'reselect';

/**
 * Direct selector to the publishProjectPage state domain
 */
const selectPublishProjectPageDomain = (state) => state.get('publishProjectPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PublishProjectPage
 */

const makeSelectPublishProjectPage = () => createSelector(
  selectPublishProjectPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectPublishProjectPage;
export {
  selectPublishProjectPageDomain,
};
