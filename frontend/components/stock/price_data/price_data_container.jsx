import PriceDate from './price_data';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  const prices = state.stock.prices;
  const endPrice = prices[prices.length-1].price;
  const startPrice = prices[0].price;
  return {
  pointedPrice: state.tooltip.pointedPrice,
  endPrice: endPrice,
  startPrice: startPrice
}}



export default connect(mapStateToProps)(PriceDate)
