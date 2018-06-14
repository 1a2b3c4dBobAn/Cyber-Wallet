import Watchlist from './watchlist';
import { connect } from 'react-redux';
import { watchlistAction, fetchWatchList } from '../../actions/watchlist_actions';
import { userWatchesStock } from '../../reducers/selector';


const mapStateToProps = state => ({
  onList: userWatchesStock(state),
  stock_id: state.stock.stock_id
})

const mapDispatchToProps = dispatch => {
  return {
  watchlistAction: () =>  dispatch(watchlistAction()),
  fetchWatchList: () => dispatch(fetchWatchList())
}}


export default connect(mapStateToProps, mapDispatchToProps)(Watchlist)
