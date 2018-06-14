import * as StockAPIUtil from '../util/stock_api_util';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_SEARCH_LIST = 'RECEIVE_SEARCH_LIST';


export const fetchStock = (symbol, func, time_range) => dispatch => (
  StockAPIUtil.fetchStock(symbol, func, time_range).then(payload => (
    dispatch(receiveStock(payload))
  ))
);

const receiveStock = payload => ({
  type: RECEIVE_STOCK,
  payload
});


const receiveSearchList = payload => ({
  type: RECEIVE_SEARCH_LIST,
  payload
})


export const searchStocks = search_keyword => dispatch => (
  StockAPIUtil.searchStocks(search_keyword).then(payload => (
      dispatch(receiveSearchList(payload))
  ))
)
