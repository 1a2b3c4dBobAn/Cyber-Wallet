import React from 'react';


class StockShow extends React.Component {
  componentDidMount() {
    this.props.fetchStock(this.props.match.params.stockSymbol);
  }

  render(){
    return(

    )
  }
}


export default StockShow;
