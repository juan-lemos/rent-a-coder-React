
import { fromJS } from 'immutable';
import candidatesPageReducer from '../reducer';

describe('candidatesPageReducer', () => {
  it('returns the initial state', () => {
    expect(candidatesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
