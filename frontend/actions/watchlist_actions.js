import * as WatchListApiUtil from '../util/watchlist_api_util';
import { userWatchesStock } from '../reducers/selector';


export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';


export const addToWatchlist = stock_id => dispatch => (
  WatchListApiUtil.addToWatchlist(stock_id).then(payload => dispatch(receiveWatchlist(payload)))
)


export const deleteFromWatchlist = stock_id => dispatch => (
  WatchListApiUtil.removeFromWatchlist(stock_id).then(payload => dispatch(removeFromWatchlist(payload)))
)

export const fetchWatchList = () => dispatch => (
  WatchListApiUtil.fetchWatchList().then(payload => dispatch(receiveWatchlist(payload)))
)

export const watchlistAction = () => (dispatch, getState) => {
  const state = getState();
  const onList = userWatchesStock(state);
  const stock_id = state.stock.stock_id;
  if (onList) {
    dispatch(deleteFromWatchlist(stock_id))
  }else {
    dispatch(addToWatchlist(stock_id))
  }
}


const removeFromWatchlist = payload => ({
  type: REMOVE_FROM_WATCHLIST,
  payload
})

const receiveWatchlist = payload => ({
  type: RECEIVE_WATCHLIST,
  payload
})
