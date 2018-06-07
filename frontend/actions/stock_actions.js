import * as StockAPIUtil from '../util/stock_api_util';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';


export const fetchStock = (id, func) => dispatch => (
  StockAPIUtil.fetchStock(id, func).then(stock => (
    dispatch(receiveStock(stock))
    // the error handling
  ))
);

const receiveStock = stock => ({
  type: RECEIVE_STOCK,
  stock
});
