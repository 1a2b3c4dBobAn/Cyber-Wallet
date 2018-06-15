import merge from 'lodash/merge';
import {UPDATE_POINTED_PRICE} from '../actions/custom_tool_tip_actions';

const customToolTipReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_POINTED_PRICE:
      return merge({}, state, {pointedPrice: action.pointedPrice});
    default:
      return state;
  }
}


export default customToolTipReducer;
