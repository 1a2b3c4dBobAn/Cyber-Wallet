import merge from 'lodash/merge';
import {RECEIVE_STOCK, RECEIVE_POINTED_PRICE, RECEIVE_SEARCH_LIST} from '../actions/stock_actions.js';


const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
