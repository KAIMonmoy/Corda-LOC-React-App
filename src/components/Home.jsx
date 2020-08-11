import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	componentDidMount() {
		console.log('### Home ###');
	}

	render() {
		return (
			<React.Fragment>
				<h1>Home</h1>
				<Link to="/transaction/5">Transaction</Link>
			</React.Fragment>
		);
	}
}
