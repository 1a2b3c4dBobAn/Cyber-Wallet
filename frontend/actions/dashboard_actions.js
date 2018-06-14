import * as DashBoardApiUtil from '../util/dashboard_api_util';
//
// export const RECEIVE_STOCK_INFO = 'RECEIVE_STOCK_INFO';
//
//
// export const fetchStockInfo = () => dispatch => (
//   StockAPIUtil
// )

export const RECEIVE_HOLDING_INFO = 'RECEIVE_HOLDING_INFO';
export const RECEIVE_PORTFOLIO_VALUE = 'RECEIVE_PORTFOLIO_VALUE';
export const RECEIVE_WATCHED_STOCK_LIST = 'RECEIVE_WATCHED_STOCK_LIST';


export const fetchHoldingInfo = () => dispatch => (
  DashBoardApiUtil.fetchHoldingInfo()
  .then(payload => dispatch(receiveHoldingInfo(payload)))
)

export const fetchPortfolioValue = () => dispatch => (
  DashBoardApiUtil.fetchPortfolioValue()
  .then(payload => dispatch(receivePortfolioValue(payload)))
)

export const getWatchedStockList = () => dispatch => (
  DashBoardApiUtil.getWatchedStockList()
  .then(payload => dispatch(receiveWatchedStockList(payload)))
)

const receiveWatchedStockList = payload => ({
  type: RECEIVE_WATCHED_STOCK_LIST,
  payload
})


const receiveHoldingInfo = payload => ({
  type: RECEIVE_HOLDING_INFO,
  payload
})

const receivePortfolioValue = payload => ({
  type: RECEIVE_PORTFOLIO_VALUE,
  payload
})
