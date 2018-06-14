import DashBoard from './dashboard';
import { connect } from 'react-redux';
import { fetchStock } from '../../actions/stock_actions';
import { fetchTotalShares, fetchPortfolio } from '../../actions/fill_actions';
import { fetchWatchList } from '../../actions/watchlist_actions';
import { fetchHoldingInfo, fetchPortfolioValue, getWatchedStockList } from '../../actions/dashboard_actions.js';


const mapStateToProps = state => ({
  watchlist: state.watchlist,
  purchase_power: state.fill.purchase_power,
  dashboard: state.dashboard
})


const mapDispatchToProps = dispatch => ({
  fetchStock: (symbol, func, time_range) => dispatch(fetchStock(symbol, func, time_range)),
  fetchPortfolio: () => dispatch(fetchPortfolio()),
  fetchTotalShares: stock_id => dispatch(fetchTotalShares(stock_id)),
  fetchWatchList: () => dispatch(fetchWatchList()),
  fetchHoldingInfo: () => dispatch(fetchHoldingInfo()),
  fetchPortfolioValue: () => dispatch(fetchPortfolioValue()),
  getWatchedStockList: () => dispatch(getWatchedStockList())
})


export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
