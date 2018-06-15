import React from 'react';
import {PieChart, Pie, Sector} from 'recharts';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fontSize="17" fill={'white'}>{payload.symbol}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={"url(#arc-gradient)"}
      />

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius - 30 }
        outerRadius={outerRadius - 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={'rgba(255,255,255,0.3)'}
        filter={"url(#f1)"}
      />

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius - 50 }
        outerRadius={outerRadius - 50}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={'rgba(255,255,255,0.3)'}
      />

      <defs>
      <filter id="f1" x="0" y="0" width="200%" height="200%">
        <feOffset result="offOut" in="SourceAlpha" dx="10" dy="10" />
        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="6" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
    </defs>


      <linearGradient id="arc-gradient">
        <stop offset="0%" stopOpacity="0" />
        <stop offset="50%" stopColor="white" />
        <stop offset="100%" stopColor="#8884d8" />
      </linearGradient>

      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={'white'}
      />

      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 16}
        outerRadius={outerRadius + 17}
        fill={fill}
      />

      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fontSize="1.3vw" fill="white">{`$ ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};



class TwoLevelPieChart extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      activeIndex: 0,
      width: 0, height: 0
    }

    this.onPieEnter = this.onPieEnter.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
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
    const width = this.state.width * 0.23
    const height = this.state.width * 0.2

  	return (
      <div>
      <h2 className="piechart-title">Holding Diversity</h2>
    	<PieChart width={width * 1.3} height={height}>

        <linearGradient id="arc-gradient2">
          <stop offset="0%" stopOpacity="0" />
          <stop offset="50%" stopColor="white" />
          <stop offset="100%" stopColor="#8884d8" />
        </linearGradient>
        <Pie
        	activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={this.props.holdings}
          cx={width * 1.3 / 2}
          cy={height /2 }
          innerRadius={width*0.19}
          outerRadius={width*0.25}
          fill="#8884d8"
          stroke="rgba(0,0,0,0)"
          offset={-4}
          paddingAngle={2}
          onMouseEnter={this.onPieEnter}
        />
       </PieChart>
     </div>
    );
  }
}


export default TwoLevelPieChart;
