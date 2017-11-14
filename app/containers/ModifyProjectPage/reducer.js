import { fromJS } from 'immutable';
import {
  GET_PROJECT,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_ERROR,
  POST_PROJECT_MODIFICATION,
  POST_PROJECT_MODIFICATION_SUCCESS,
  POST_PROJECT_MODIFICATION_ERROR,
} from './constants';

const initialState = fromJS({
  loadingProject: false,
  errorProject: false,
  responseProject: null,
  loadingPostModification: false,
  errorPostModification: null,
  responsePostModification: null,
});

function modifyProjectPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECT:
      return state
        .set('loadingProject', true)
        .set('errorProject', false)
        .set('responseProject', null);
    case GET_PROJECT_SUCCESS:
      return state
        .set('loadingProject', false)
        .set('responseProject', action.content);
    case GET_PROJECT_ERROR:
      return state
        .set('loadingProject', false)
        .set('errorProject', true);
    case POST_PROJECT_MODIFICATION:
      return state
        .set('loadingPostModification', true)
        .set('errorPostModification', null)
        .set('responsePostModification', null);
    case POST_PROJECT_MODIFICATION_SUCCESS:
      return state
        .set('loadingPostModification', false)
        .set('responsePostModification', action.content.body);
    case POST_PROJECT_MODIFICATION_ERROR:
      return state
        .set('loadingPostModification', false)
        .set('errorPostModification', action.error);
    default:
      return state;
  }
}

export default modifyProjectPageReducer;
