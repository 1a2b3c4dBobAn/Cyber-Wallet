import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import {AreaChart,LineChart, Line, XAxis, YAxis,linearGradient, CartesianGrid, Tooltip, Legend, fill} from 'recharts';


class CustomTooltip2 extends React.Component {
	propTypes: {
		type: PropTypes.string,
		payload: PropTypes.array,
		label: PropTypes.string,
	};

	componentDidUpdate(){
		const { active } = this.props;
		if (active) {
			const { payload, label } = this.props;
			const pointedprice = payload[0].value;
      this.props.updatePointedPrice(pointedprice);
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


export default CustomTooltip2;
