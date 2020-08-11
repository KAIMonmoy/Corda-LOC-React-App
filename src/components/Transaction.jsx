import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Transaction extends Component {
	componentDidMount() {
		console.log('### Transaction ###');
	}

	render() {
		return (
			<React.Fragment>
				<h1>Transaction: {this.props.match.params.id}</h1>
				<Link to="/">Home</Link>
			</React.Fragment>
		);
	}
}
