
import { fromJS } from 'immutable';
import publishProjectPageReducer from '../reducer';

describe('publishProjectPageReducer', () => {
  it('returns the initial state', () => {
    expect(publishProjectPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
