import { combineReducers } from 'redux';

import entities from './entities_reducer';
// import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import stock from './stocks_reducer';
import fill from './fills_reducer';
import search from './search_reducer';
import watchlist from './watchlist_reducer';
import dashboard from './dashboard_reducer';


const rootReducer = combineReducers({
  entities,
  session,
  search,
  stock,
  fill,
  watchlist,
  dashboard,
  // ui,
  errors,
});

export default rootReducer;
