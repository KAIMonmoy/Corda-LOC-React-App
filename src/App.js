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
		const baseURL = `http://${window.location.host}/api/example`;

		fetch(`${baseURL}/me`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					myIdentity: json['me']
				});
			})
			.catch((err) => {
				console.error(err);
			});

		fetch(`${baseURL}/peers`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					peers: json['peers'],
					isLoading: false
				});
			})
			.catch((err) => {
				console.error(err);
			});
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
