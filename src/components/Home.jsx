import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Home.css';
import BankImage from '../images/bank.png';
import BusinessImage from '../images/business.png';

import LoadingScreen from './LoadingScreen';
import TransactionListCard from './TransactionListCard';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			transactions: [],
			isLoading: true
		};
	}

	componentDidMount() {
		const baseURL = `http://${window.location.host}/api/example`;

		fetch(`${baseURL}/transaction`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					transactions: json,
					isLoading: false
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}

	triggerReload = () => {
		this.setState({ isLoading: true });
		const baseURL = `http://${window.location.host}/api/example`;

		fetch(`${baseURL}/transaction`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					transactions: json,
					isLoading: false
				});
			})
			.catch((err) => {
				console.error(err);
			});
	};

	isBank = () => {
		return this.props.myIdentity.toLocaleLowerCase().includes('bank');
	};

	getProfileImage = () => {
		if (this.isBank()) return BankImage;
		return BusinessImage;
	};

	render() {
		const { myIdentity } = this.props;
		return this.state.isLoading ? (
			<LoadingScreen />
		) : (
			<div className="ui grid full-height full-width">
				<div className="ui four wide column profile-column">
					<div className="ui fluid card">
						<img className="ui small circular image container" src={this.getProfileImage()} alt="" />
						<div className="content">
							<p className="header">{myIdentity.split(',')[0].split('=')[1]}</p>
							<div className="description">
								<i className="map marker alternate icon" />
								{myIdentity.split(',')[1].split('=')[1]}, {myIdentity.split(',')[2].split('=')[1]}
							</div>
						</div>
					</div>
					{!this.isBank() && (
						<Link to="transaction/new/tx">
							<button className="ui fluid button new-tx-button">
								<i className="white handshake icon" />
								Start New Transaction
							</button>
						</Link>
					)}
					<button onClick={this.triggerReload} className="ui fluid button reload-button">
						<i className="huge white sync icon" />
					</button>
				</div>
				<div className="ui twelve wide column tx-list-column">
					{this.state.transactions.map((tx) => (
						<TransactionListCard
							key={
								tx['states'][1] != null ? (
									tx['states'][1]['state']['data']['locId']
								) : (
									tx['states'][0]['state']['data']['purchaseOrderId']
								)
							}
							transaction={tx['states']}
						/>
					))}
				</div>
			</div>
		);
	}
}
