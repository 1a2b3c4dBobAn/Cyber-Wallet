import {CustomTooltip} from './stock_chart';
import { connect } from 'react-redux';
import {receivePointedPrice} from '../../actions/stock_actions';


const mapDispatchToProps = dispatch => ({
  receivePointedPrice: pointed_price => dispatch(receivePointedPrice(pointed_price))
});

// const poinetedPriceContainer =  connect(null,mapDispatchToProps)(CustomTooltip);
