import React from 'react';
import {AreaChart,LineChart, Line, XAxis, YAxis,linearGradient, CartesianGrid, Tooltip, Legend, fill} from 'recharts';
const data = [
      {name: ' ',  ['Aye']: 500, Ugh: 500, amt: 2400},
      {name:  ' ', ['Aye']: 3000, Ugh: 1398, amt: 2210},
      {name: ' ', ['Aye']: 2000, Ugh: 9800, amt: 2290},
      {name: ' ', ['Aye']: 2780, Ugh: 3908, amt: 2000},
      {name: ' ', ['Aye']: 2000, Ugh: 4800, amt: 2181},
      {name: ' ', ['Aye']: 5000, Ugh: 3800, amt: 2500},
      {name: ' ', ['Aye']: 12000, Ugh: 4300, amt: 2100},
];

class SimpleLineChart extends React.Component {
	render () {
  	return (
    	<LineChart width={500} height={300} data={data}

            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="Ugh" id="Ugh" stroke="#79047f"  activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="Aye" stroke="#24ffc7" />
      </LineChart>
    );
  }
}

export default SimpleLineChart;
