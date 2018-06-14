import React from 'react';
import { Link } from 'react-router-dom';


class WatchlistIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const watchlistinfo = this.props.watchlist;
    if (watchlistinfo === undefined) {
      return ''
    }else {
      return(
        <ul>
          <p>Watchlist</p>
          {watchlistinfo.map( stock =>
            <Link to={"/stocks/"+ stock.symbol}  className="watchlist-link">
              <li className="watchlist-li" >
              <p > {stock.symbol}  </p>
              <p className='watchlist-li-name'> {stock.name}  </p>
              <p className='watchlist-li-price'> {stock.price}  </p>
              </li>
            </Link>
          )}
        </ul>)
    }
  }
}


export default WatchlistIndex;



// <li>< Watchlist_item  stock_id = {watchlistinfo[key].stock_id} fetchStockInfo = this.props.fetchStockInfo /></li>
