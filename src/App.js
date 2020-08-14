import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Transaction from './components/Transaction';
import LoadingScreen from './components/LoadingScreen';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			myIdentity: '',
			peers: []
		};
	}

	componentDidMount() {
		//TODO: Change BaseURL After test
		const BaseURL =
			// `http://${window.location.host}/api/example`;
			`https://b9b84b1a-f0b9-421e-866a-520d61b3bdb9.mock.pstmn.io/api/example`;

		// TODO: Fetch Real Data
		// fetch(`http://${window.location.host}/api/example/me`)
		// 	.then((res) => res.json())
		// 	.then((json) => {
		// 		this.setState({
		// 			myIdentity: json["me"]
		// 		});
		// 	})
		// 	.catch((err) => {
		// 		console.error(err);
		// 	});
		// fetch(`http://${window.location.host}/api/example/peers`)
		// 	.then((res) => res.json())
		// 	.then((json) => {
		// 		this.setState({
		// 			peers: json["peers"]
		// 		});
		// 	})
		// 	.catch((err) => {
		// 		console.error(err);
		// 	});
		setTimeout(() => {
			this.setState({
				myIdentity: 'O=KowloonTraders, L=Kowloon, C=HK'
			});
		}, 500);
		setTimeout(() => {
			this.setState({
				peers: [
					'O=KowloonBank, L=Kowloon, C=HK',
					'O=DhakaBank, L=Dhaka, C=BD',
					'O=ChittagongTraders, L=Chittagong, C=BD'
				],
				isLoading: false
			});
		}, 1000);
	}

	render() {
		return this.state.isLoading ? (
			<LoadingScreen />
		) : (
			<React.Fragment>
				<Switch>
					<Route
						path="/transaction/:type/:id"
						render={(props) => (
							<Transaction {...props} myIdentity={this.state.myIdentity} peers={this.state.peers} />
						)}
					/>
					<Route
						path="/"
						render={(props) => (
							<Home {...props} myIdentity={this.state.myIdentity} peers={this.state.peers} />
						)}
					/>
				</Switch>
			</React.Fragment>
		);
	}
}
