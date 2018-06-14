import * as FillApiUtil from '../util/fill_api_util';


export const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO';
export const RECEIVE_TOTAL_SHARES = 'RECEIVE_TOTAL_SHARES';



export const createFill = fill => dispatch => (
  FillApiUtil.createFill(fill).then(payload => dispatch(upDatePortfolio(payload)))
)


export const upDatePortfolio = payload => ({
    type: UPDATE_PORTFOLIO,
    payload
})

export const fetchPortfolio = () => dispatch => (
  FillApiUtil.fetchPortfolio().then(payload => dispatch(upDatePortfolio(payload)))
)


export const fetchTotalShares = stock_id => dispatch => (
  FillApiUtil.fetchTotalShares(stock_id).then(payload => dispatch(receiveTotalShares(payload)))
)



const receiveTotalShares = payload => ({
  type: RECEIVE_TOTAL_SHARES,
  payload
})
