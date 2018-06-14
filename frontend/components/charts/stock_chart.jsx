import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import PointedPriceContainer from './pointed_price_container'

import {AreaChart,LineChart, Line, XAxis, YAxis,linearGradient, CartesianGrid, Tooltip, Legend, fill} from 'recharts';


export class CustomTooltip extends React.Component {
	propTypes: {
		type: PropTypes.string,
		payload: PropTypes.array,
		label: PropTypes.string,
	};

	componentWillUpdate(){
		const { active } = this.props;
		if (active) {
			const { payload, label } = this.props;
			const pointedprice = payload[0].value;
			// console.log(pointedprice);
			this.props.returnPointedPrice(pointedprice);
		}
	}

	render() {
		const { active } = this.props;
		if (active) {
			const { payload, label } = this.props;
			return (
				<div className="custom-tooltip">
					<p className="time">{`${label}`}</p>
					<p className="price">{ '$' + `${payload[0].value}`}</p>
				</div>
			);
		}
		return null;
	}
};


class StockChart extends React.Component {
	constructor(props){
    super(props);
		const prices = this.props.stock.prices;
		this.state = {
				pointedprice: null
		}
		this.getPointedPrice = this.getPointedPrice.bind(this);
		this.returnToEndPrice = this.returnToEndPrice.bind(this);
		this.changeFormatter = this.changeFormatter.bind(this);
  }

	getPointedPrice(dataFromChild){
		var pointedprice = merge({}, { pointedprice: dataFromChild });
		this.setState(pointedprice);
	}

	returnToEndPrice(){
		const prices = this.props.stock.prices;
		const endPrice = prices[prices.length-1].price;
		this.setState({ pointedprice: endPrice })
	}

	changeFormatter(startPrice){

		var change = Math.round(100*(this.state.pointedprice - startPrice)) / 100;
		if (change < 0) {
			change = '-$' + change.toString().slice(1);
		}else {
			change = '+$' + change;
		};
		var percentchange = Math.round( 100*(this.state.pointedprice - startPrice)/startPrice);
		return   `${change} (${percentchange}%)`;
	}

	getStyles(){}



	render () {
      const prices = this.props.stock.prices;
      const func = this.props.stock.func
      const data = prices;
      let profitIndicator = '#24ffc7';
      const startPrice = prices[0].price;
      const endPrice = prices[prices.length-1].price;
      if (endPrice < startPrice) {
        profitIndicator = 'rgb(181,33,127)';
      }

  	return (
      <div>
      <p className="pointed_price"  >{ '$' + (this.state.pointedprice  || endPrice ) }</p>
      <p className="price_change">{ this.changeFormatter(startPrice) }</p>
    	<LineChart width={1200} height={560} data={data}
            margin={{top: 0, right: 10, left: 20}}  onMouseLeave={this.returnToEndPrice}   >

       <defs>
         <filter id="f1" x="0" y="0">
         <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
         </filter>
       </defs>

       <XAxis dataKey="time" />
       <YAxis type="number" domain={[dataMin => (Math.round(dataMin) - 0.55),  'dataMax']}  />
	     <Tooltip  wrapperStyle={{ backgroundColor: 'none', border: 'none'}}  content={<CustomTooltip  returnPointedPrice={this.getPointedPrice} />}  labelStyle={{color: "white", fontSize: "20px" }} cursor={{ stroke: 'rgba(255,255,255,0.4)', strokeWidth: 1 }} position={{y: 0}}  />
       <Line type="monotone" dataKey="price" stroke={profitIndicator} strokeWidth = '8' filter="url(#f1)" dot={false}/>
       <Line type="monotone" dataKey="price" stroke="white" strokeWidth = '3'  dot={false}/>
      </LineChart>
    </div>
    );
  }
}

export default StockChart;
