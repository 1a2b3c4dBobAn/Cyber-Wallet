import merge from 'lodash/merge';
import { RECEIVE_HOLDING_INFO, RECEIVE_PORTFOLIO_VALUE, RECEIVE_WATCHED_STOCK_LIST } from '../actions/dashboard_actions';

const dashboardReducer = (state = {}, action ) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_HOLDING_INFO:
        return merge({}, state, action.payload);
      case RECEIVE_PORTFOLIO_VALUE:
        return merge({}, state, action.payload);
      case RECEIVE_WATCHED_STOCK_LIST:
        return merge({}, state, action.payload);
      default:
        return state;
    }
};



export default dashboardReducer;
