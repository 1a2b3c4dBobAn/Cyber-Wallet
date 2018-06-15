import React from 'react';
import { connect } from 'react-redux';
import {searchStocks} from '../../actions/stock_actions'
import Search from './search';

const mapStateToProps = state => ({
  stockslist: state.search.stockslist
})


const mapsDispatchToProps = dispatch => ({
  searchStocks: search_keyword => dispatch(searchStocks(search_keyword))
})


export default connect( mapStateToProps,mapsDispatchToProps )( Search )
