
import { fromJS } from 'immutable';
import modifyProfilePageReducer from '../reducer';

describe('modifyProfilePageReducer', () => {
  it('returns the initial state', () => {
    expect(modifyProfilePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
