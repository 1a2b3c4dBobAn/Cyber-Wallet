import CustomTooltip2 from './custom_tool_tip';
import { connect } from 'react-redux';
import {updatePointedPrice} from '../../../actions/custom_tool_tip_actions';

const mapStateToProps = state => ({
  stock: state.stock
})



const mapDispatchToProps = dispatch => ({
  updatePointedPrice: pointedPrice => dispatch(updatePointedPrice(pointedPrice))
})

export default connect(mapStateToProps,mapDispatchToProps)(CustomTooltip2)
