import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import CustomTooltip2 from './stock_chart_helper/custom_tool_tip_container';
import {AreaChart,LineChart, Line, XAxis, YAxis,linearGradient, CartesianGrid, Tooltip, Legend, fill} from 'recharts';



class StockChart extends React.Component {
	constructor(props){
    super(props);
		const prices = this.props.stock.prices;
		this.state = {
				// pointedprice: null,
				width: 0, height: 0
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render () {
      const prices = this.props.stock.prices;
      // const func = this.props.stock.func
      const data = prices;
      let profitIndicator = '#24ffc7';
      const startPrice = prices[0].price;
      const endPrice = prices[prices.length-1].price;
      if (endPrice < startPrice) {
        profitIndicator = 'rgb(181,33,127)';
      }
			const width = this.state.width * 0.7;
			const height = this.state.width * 0.3;
  	return (
      <div>
    	<LineChart width={width} height={height} data={data}
            margin={{top: 0, right: 10, left: 20}}   >

       <defs>
         <filter id="f1" x="0" y="0">
         <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
         </filter>
       </defs>

       <XAxis dataKey="time" />
       <YAxis type="number" domain={[dataMin => (Math.round(dataMin) - 0.55),  'dataMax']}  />
	     <Tooltip  wrapperStyle={{ backgroundColor: 'none', border: 'none'}}
				 content={<CustomTooltip2 />}
				 labelStyle={{color: "white", fontSize: "20px" }}
				 cursor={{ stroke: 'rgba(255,255,255,0.4)', strokeWidth: 1 }} />
       <Line type="monotone" dataKey="price" stroke={profitIndicator} strokeWidth = '8' filter="url(#f1)" dot={false}/>
       <Line type="monotone" dataKey="price" stroke="white" strokeWidth = '3'  dot={false}/>
      </LineChart>
    </div>
    );
  }
}

export default StockChart;

// <p className="pointed_price"  >{ '$' + (this.state.pointedprice  || endPrice ) }</p>
// <p className="price_change">{ this.changeFormatter(startPrice) }</p>

 // content={<CustomTooltip2 returnPointedPrice={this.getPointedPrice} />}
// <LineChart width={width} height={height} data={data}
// 			margin={{top: 0, right: 10, left: 20}}  onMouseLeave={this.returnToEndPrice}   >
// position={{y: 0}}
