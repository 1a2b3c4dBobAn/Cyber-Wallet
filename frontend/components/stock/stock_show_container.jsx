import StockShow from './stock_show';
import { connect } from 'react-redux';
import { fecthStock } from '../../actions/stock_actions';


const mapStateToProps = state => ({
  stock: state.stock
})


const mapDispatchToProps = dispatch => ({
  fetchStock: stockSymbol => dispatch(fetchStock(stockSymbol))
})


export default connect(mapStateToProps, mapDispatchToProps)(StockShow);
