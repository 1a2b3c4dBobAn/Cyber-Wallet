import merge from 'lodash/merge';
import RECEIVE_STOCK from '../actions/stock_actions.js';

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STOCK:
      return merge({}, state, {});
    default:
      return state;
  }
}
