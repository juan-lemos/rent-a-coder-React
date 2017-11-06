import { fromJS } from 'immutable';
import {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
} from './constants';

const initialState = fromJS({});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return state
        .set('loadingProjects', true)
        .set('errorProjects', false)
        .set('responseProjects', null);
    case GET_PROJECTS_SUCCESS:
      return state
        .set('loadingProjects', false)
        .set('responseProjects', action.content);
    case GET_PROJECTS_ERROR:
      return state
        .set('loadingProjects', false)
        .set('errorProjects', true);
    default:
      return state;
  }
}

export default homePageReducer;
