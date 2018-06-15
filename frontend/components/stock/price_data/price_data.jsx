import React from 'react';


class PriceData extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pointedPrice: null,
    }
  }

  componentWillReceiveProps(nextProps, nextState){
    if (this.state.pointedprice !== nextProps.pointedPrice ) {
      this.setState(
        {pointedprice: this.props.pointedPrice}
      )
    }
  }


  changeFormatter(startPrice){

    var change = Math.round(100*(this.props.pointedPrice - startPrice)) / 100;
    if (change < 0) {
      change = '-$' + change.toString().slice(1);
    }else {change = '+$' + change;};
    var percentchange = Math.round( 100*(this.props.pointedPrice - startPrice)/startPrice);
    return   `${change} (${percentchange}%)`;
  }



  render(){
    const endPrice = this.props.endPrice;

    return (
      <div>
        <p className="pointed_price"  >{ '$' + (this.props.pointedPrice  || endPrice ) }</p>
        <p className="price_change">{ this.changeFormatter(this.props.startPrice) }</p>
      </div>
    )
  }
}

export default PriceData;
