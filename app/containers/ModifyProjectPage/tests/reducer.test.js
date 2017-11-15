
import { fromJS } from 'immutable';
import modifyProjectPageReducer from '../reducer';

describe('modifyProjectPageReducer', () => {
  it('returns the initial state', () => {
    expect(modifyProjectPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
