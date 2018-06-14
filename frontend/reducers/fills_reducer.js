import merge from 'lodash/merge';
import { UPDATE_PORTFOLIO, RECEIVE_TOTAL_SHARES } from '../actions/fill_actions'

const fillsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_PORTFOLIO:
      return merge({}, state, action.payload.portfolio);
    case RECEIVE_TOTAL_SHARES:
      return merge({}, state, action.payload.total_shares);
    default:
      return state;
  }
};

export default fillsReducer;
