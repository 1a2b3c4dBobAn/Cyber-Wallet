import React from 'react';
import { Link } from 'react-router-dom';


const SearchIndex = ({stockslist, searchKeyword, clearSearch}) => {
  if (stockslist === undefined ) {
    return null
  }else if (searchKeyword === '') {
    return null
  }else {
      return (
        <div className="search-list" >
          <ul>
            {stockslist.map(stock =>

                <Link to={"/stocks/"+ stock.symbol} className="stock-link"
                  onClick = {clearSearch} >
                  <li className="search-li">
                  <p className='stock-li-symbol'> {stock.symbol}  </p>
                  <p className='stock-li-name'> {stock.name}  </p>
                  </li>
                </Link>

            )}
          </ul>
        </div>
      )
  }
}


export default SearchIndex;
