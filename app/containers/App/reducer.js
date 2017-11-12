import { fromJS } from 'immutable';

import {
  GET_TECHNOLOGIES,
  GET_TECHNOLOGIES_SUCCESS,
  GET_TECHNOLOGIES_ERROR,
} from './constants';

const initialState = fromJS({
  loadingTechnologies: false,
  errorTechnologies: false,
  responseTechnologies: null,
});

const modifiedContent = [];

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TECHNOLOGIES:
      return state
        .set('loadingTechnologies', true)
        .set('errorTechnologies', false)
        .set('responseTechnologies', null);
    case GET_TECHNOLOGIES_SUCCESS:
      action.content.technologies.forEach((element) => {
        modifiedContent.push({ value: element.id, label: element.name });
      }
      );
      return state
        .set('loadingTechnologies', false)
        .set('responseTechnologies', modifiedContent);
    case GET_TECHNOLOGIES_ERROR:
      return state
        .set('loadingTechnologies', false)
        .set('errorTechnologies', true);
    default:
      return state;
  }
}

export default appReducer;
