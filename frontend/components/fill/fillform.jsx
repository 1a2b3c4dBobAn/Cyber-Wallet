import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FillForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      size: '',
      side: 'buy',
      price: this.props.price,
      total_shares: 0,
      purchase_power: undefined
    };
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount(){
    this.props.fetchPortfolio();
    this.props.fetchTotalShares(this.props.stock.stock_id);
    this.setState({
      total_shares: this.props.total_shares
    });
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.purchase_power && nextState.purchase_power !== nextProps.purchase_power ){
      this.setState({
        purchase_power: nextProps.purchase_power,
        total_shares: nextProps.total_shares
      })
    }else{
      nextProps.fetchPortfolio();
      nextProps.fetchTotalShares(nextProps.stock.stock_id);
    }
  }

  update() {
    return e => this.setState({
      size: e.currentTarget.value
    })
  }

  placeOrder(e) {
    e.preventDefault();
    const prices = this.props.prices
    const price = prices[prices.length-1].price;
    const fill = {
      user_id: this.props.user_id,
      stock_id: this.props.stock.stock_id,
      price: price,
      size: this.state.size,
      side: this.state.side };
      this.props.createFill(fill);
      this.setState({
      size: '',
      purchase_power: this.props.purchase_power
    })
  }

  render() {
    if (this.state.purchase_power === 0) {
      return <div>loading... </div>
    }

    const prices = this.props.stock.prices;
    const price = prices[prices.length-1].price;

    return(

      <div>
        <div className="fillform-buttons">
          <button className="switch-side" id="on"> Buy{' ' + this.props.stock.symbol}</button>
          <Link to={"/stocks/"+ this.props.stock.symbol +"/sell"} className="switch-side" id="off"  >Sell{' ' + this.props.stock.symbol}</Link>
        </div>

        <form onSubmit={this.placeOrder} className="fillform-box">
          <div className="share-input">
            <p >Shares</p>
              <input type="text"
                value={this.state.size}
                onChange={this.update()}
                className="fillform-input"
                placeholder="0"
              />
          </div>

          <div className="market-price">
            <p>Market Price </p>
            <p >{ price }</p>
          </div>

          <div className="estimate">
            <p>Estimated Cost</p>
            <p >{'$' + this.state.size * price}</p>
          </div>

          <input className="session-submit" id="order-submit" type="submit" value="Submit Order" />
          </form>
          <div className="asset-display">
            <p className="asset-display-text"> 💰 $ { this.state.purchase_power ||this.props.purchase_power} Buying Power Available 💰</p>
          </div>
      </div>
    )
  }
}

export default FillForm;
