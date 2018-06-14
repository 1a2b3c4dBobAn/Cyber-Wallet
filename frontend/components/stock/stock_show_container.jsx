import StockShow from './stock_show';
import { connect } from 'react-redux';
import { fetchStock } from '../../actions/stock_actions';
import { fetchPortfolio } from '../../actions/fill_actions';


const mapStateToProps = state => ({
  stock: state.stock
})


const mapDispatchToProps = dispatch => ({
  fetchStock: (symbol, func, time_range) => dispatch(fetchStock(symbol, func, time_range)),
  fetchPortfolio: () => dispatch(fetchPortfolio())
})


export default connect(mapStateToProps, mapDispatchToProps)(StockShow);
