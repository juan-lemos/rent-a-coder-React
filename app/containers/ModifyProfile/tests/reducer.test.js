
import { fromJS } from 'immutable';
import modifyProfileReducer from '../reducer';

describe('modifyProfileReducer', () => {
  it('returns the initial state', () => {
    expect(modifyProfileReducer(undefined, {})).toEqual(fromJS({}));
  });
});
