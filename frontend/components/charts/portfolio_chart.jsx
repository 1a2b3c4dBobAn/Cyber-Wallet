import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import {AreaChart, Area, LineChart, Line, XAxis, YAxis,linearGradient, CartesianGrid, Tooltip, Legend, fill} from 'recharts';
import DemoHistory from './demo_history';

const data = DemoHistory;

class PortfolioChart extends React.Component {
	constructor(props) {
  super(props);
  this.state = { width: 0, height: 0 };
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
		const width = this.state.width * 0.53
		const height = this.state.width * 0.17
  	return (
    	<AreaChart width={width} height={height} data={data}
			  margin={{ top: width * 0.005, right: width * 0.003, left: 0, bottom: 0 }}>

			  <defs>
			    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
			      <stop offset="5%" stopColor="#79047f" stopOpacity={0.6}/>
			      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
			    </linearGradient>
			    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
			      <stop offset="3%" stopColor="#24ffc7" stopOpacity={0.8}/>
			      <stop offset="96%" stopColor="#8884d8" stopOpacity={0}/>
			    </linearGradient>
					<filter id="f2" x="0" y="0">
						<feGaussianBlur in="SourceGraphic" stdDeviation="3" />
					</filter>
			  </defs>

			  <XAxis dataKey="date" />
			  <YAxis domain={[dataMin => (55000),  'dataMax']}   />
			  <Tooltip wrapperStyle={{ backgroundColor: 'none', border: 'none'}} labelStyle={{color: "white", fontSize: "20px" }} cursor={{ stroke: 'rgba(255,255,255,0.4)', strokeWidth: 1 }}  />

			  <Area type="monotone" dataKey="value" stroke='#24ffc7' strokeWidth="4" fillOpacity={0.6} fill="url(#colorPv)" filter="url(#f2)" />

			  <Area type="monotone" dataKey="value" stroke="white" strokeWidth="1" fillOpacity={1} fill="url(#colorPv)"  />
			</AreaChart>
		)
  }
}

export default PortfolioChart;


// <CartesianGrid strokeDasharray="3 3" />
