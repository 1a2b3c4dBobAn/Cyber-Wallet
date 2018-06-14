import merge from 'lodash/merge';
import {RECEIVE_STOCK, RECEIVE_POINTED_PRICE, RECEIVE_SEARCH_LIST} from '../actions/stock_actions.js';

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STOCK:
      return  merge({}, action.payload.stock);
    case RECEIVE_POINTED_PRICE:
      return  merge({},state, action.pointed_price);
    // case RECEIVE_SEARCH_LIST:
      // let newObject = {}
      // action.payload.stockslist.map(item => {
      //   newObject[item.stock_id] = item });
      // return merge({}, state, action.payload);
    default:
      return state;
  }
};

export default stocksReducer;
