import React from 'react';

import PortfolioChart from '../charts/portfolio_chart'
import WatchlistIndex from './watchlist/watchlist_index';
import HoldingChart from '../charts/holding_diversity_pie_chart';
import PortfolioPieChart from '../charts/cash_allocation_pie_chart';

class DashBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      totalValue: 0
    }
  }

  componentDidMount(){
    this.props.fetchHoldingInfo();
    this.props.fetchPortfolioValue()
    this.props.getWatchedStockList()
  }


  render(){
    const portfolioValue = this.props.dashboard.portfolio_value
    // const totalValue = portfolioValue[0].value + portfolioValue[1].value
    return (
    <div className="portfolio">
      <div className="portfolio-sector">
        <div className="dashboard-title">
          <h1>Welcome,{this.props.currentUser.username}</h1>
          <h3 className="total-value"> $97170.60 </h3>
          <h5 className="total-value-sign"> portfolio value </h5>
        </div>
        <div className="portfolio-chart">
        <PortfolioChart  className="value-chart"/>
      </div>
      <div className="asset-charts">
        <PortfolioPieChart  portfolioValue = {portfolioValue}/>
        <HoldingChart  holdings = {this.props.dashboard.holdings}/>
      </div>
      </div>
      <div className="dashboard-watchlist" >
        <WatchlistIndex watchlist={this.props.dashboard.watchlist} />
      </div>
    </div>
   )
  }
}

export default DashBoard;



 // <WatchlistIndex fetchStockInfo = this.props.fetchStockInfo/>
