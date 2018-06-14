import merge from 'lodash/merge';
import { RECEIVE_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../actions/watchlist_actions';


const watchlistReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_WATCHLIST:
      return merge({}, state, action.payload);
    case REMOVE_FROM_WATCHLIST:
      const newState = merge({}, state);
      delete newState[action.payload.stock_id];
      return newState;
    default:
      return state;
  }
};


export default watchlistReducer;
