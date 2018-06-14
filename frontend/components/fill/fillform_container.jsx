import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import FillForm from './fillform';
import { createFill, fetchTotalShares, fetchPortfolio } from '../../actions/fill_actions';


const mapStateToProps = state => ({
  purchase_power: state.fill.purchase_power,
  total_shares: state.fill.total_shares,
  prices: state.stock.prices,
  side: 'buy',
  stock: state.stock,
  user_id: state.session.id
})

const mapDispatchToProps = dispatch => ({
  createFill: fill => dispatch(createFill(fill)),
  fetchTotalShares: stock_id => dispatch(fetchTotalShares(stock_id)),
  fetchPortfolio: () => dispatch(fetchPortfolio())
})

export default connect(mapStateToProps, mapDispatchToProps)(FillForm)
