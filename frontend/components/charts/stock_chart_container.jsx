import StockChart from './stock_chart';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  stock: state.stock
})


export default connect(mapStateToProps)(StockChart)
