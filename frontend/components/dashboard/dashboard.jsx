import React from 'react';

// import PortfolioChart from '../charts/portfolio_chart'
import WatchlistIndex from './watchlist/watchlist_index';
import HoldingChart from '../charts/holding_diversity_pie_chart';
import PortfolioPieChart from '../charts/cash_allocation_pie_chart';

class DashBoard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchHoldingInfo();
    this.props.fetchPortfolioValue()
    this.props.getWatchedStockList()
  }


  render(){
    return (
    <div className="portfolio">
      <div className="portfolio-sector">
        <div className="portfolio-chart">
        This is for portfolio value
      </div>
      <div className="asset-charts">
        <PortfolioPieChart  portfolioValue = {this.props.dashboard.portfolio_value}/>
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
