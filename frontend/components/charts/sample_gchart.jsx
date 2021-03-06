import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid,linearGradient, Tooltip} from 'recharts';
const data = [
      {name: ' ',  ['Aye']: 500, Ugh: 500, amt: 2400},
      {name:  ' ', ['Aye']: 3000, Ugh: 1398, amt: 2210},
      {name: ' ', ['Aye']: 2000, Ugh: 9800, amt: 2290},
      {name: ' ', ['Aye']: 2780, Ugh: 3908, amt: 2000},
      {name: ' ', ['Aye']: 2000, Ugh: 4800, amt: 2181},
      {name: ' ', ['Aye']: 5000, Ugh: 3800, amt: 2500},
      {name: ' ', ['Aye']: 12000, Ugh: 4300, amt: 2100},
];

class StackedAreaChart extends React.Component {
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
    const width = this.state.width * 0.24
    const height = this.state.width * 0.146
  	return (
    	<AreaChart width={width} height={height} data={data}

      margin={{ top: 10, right: width * 0.1, left: 0, bottom: 0 }}>

      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#79047f" stopOpacity={0.6}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="3%" stopColor="#24ffc7" stopOpacity={0.8}/>
          <stop offset="96%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
      </defs>

  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip
    wrapperStyle={{ backgroundColor: 'none', border: 'none'}}
    labelStyle={{color: "rgba(0,0,0,0)"}}
    cursor={{ stroke: 'rgba(255,255,255,0.4)', strokeWidth: 1 }}
    />

  <Area type="monotone" dataKey="Ugh" stroke="#79047f" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="Aye" stroke="#24ffc7" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
    );
  }
}

export default StackedAreaChart;
