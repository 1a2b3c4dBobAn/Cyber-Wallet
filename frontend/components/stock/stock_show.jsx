import React from 'react';
import StockChartContainer from '../charts/stock_chart_container';
import FillFormContainer from '../fill/fillform_container.jsx';
import FillFormSellContainer from '../fill/fillform_sell_container.jsx';
import WatchListContainer from '../watchlist/watchlist_container';
import PriceDataContainer from './price_data/price_data_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';



class StockShow extends React.Component {
  constructor(props){
    super(props);
 // var func = this.props.stock.func || {func:'TIME_SERIES_INTRADAY'}
    this.state = {func:'TIME_SERIES_INTRADAY' , time_range: 'for_one_day'};
  }

  componentDidMount() {
     this.props.fetchStock(this.props.match.params.symbol, this.state.func, this.state.time_range );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.symbol !== nextProps.match.params.symbol) {
      this.props.fetchStock(nextProps.match.params.symbol, nextProps.stock.func, this.state.time_range );
    }
  }


  update(timeSeries, timeRange){
    return e => this.setState({ func: timeSeries, time_range: timeRange }, ()=>{
      this.props.fetchStock(this.props.match.params.symbol, this.state.func, this.state.time_range)
    })
  }


  render(){
    if (!this.props.stock || !this.props.stock.prices) {
      return <div>
              <p id="spinner">💵 💰 💵</p>
            </div>
    }

    const prices = this.props.stock.prices;
    const endPrice = prices[prices.length-1].price;
    const stocks = this.props.stock.prices.map(object => {
        return object.time + object.price+ '     ';
    })
    return(
      <div>
      <div className='stockPage' >
        <p className="company_sector">{this.props.stock.sector}</p>
        <p className="company_title">{this.props.stock.name}</p>
        <PriceDataContainer/>
        <div className='stockPageCore'>
          <StockChartContainer className="stockGraph"/>
        <div className='sideBox'>
            <div className='fillsBox'>
                <Switch>
                <ProtectedRoute exact path="/stocks/:symbol" component={ FillFormContainer } price = {endPrice} />
                <ProtectedRoute exact path="/stocks/:symbol/sell" component={ FillFormSellContainer } price = {endPrice} />
                </Switch>
            </div>
              <WatchListContainer />
          </div>
        </div>
      </div>

      <div className='buttonGroup'>
        <button  className="stockDataButton"   onClick={this.update("TIME_SERIES_DAILY", "for_one_day")} > Today </button>
        <button  className="stockDataButton"   onClick={this.update("TIME_SERIES_INTRADAY", "for_one_week")} > 1Week </button>
        <button  className="stockDataButton"   onClick={this.update("TIME_SERIES_DAILY", "for_one_month")} > 1Month </button>
        <button  className="stockDataButton"   onClick={this.update("TIME_SERIES_DAILY", "for_five_month")} > 5Month </button>
        <button  className="stockDataButton"   onClick={this.update("TIME_SERIES_WEEKLY", "for_one_year")} > 1Year </button>
        <button  className="stockDataButton"   onClick={this.update("TIME_SERIES_WEEKLY", "for_five_year")} > 5Year </button>
        <p> {this.props.stock.func} </p>
      </div>
    </div>
    )
  }
}


export default StockShow;
