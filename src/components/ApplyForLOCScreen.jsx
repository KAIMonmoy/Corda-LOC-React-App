import React, { Component } from 'react';

import './Transaction.css';

export default class ApplyForLOCScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			locType: '',
			locExpiryDate: '',
			advisingBank: '',
			issuingBank: '',
			locValue: 0,
			loadingPortAddress: '',
			loadingPortCity: '',
			loadingPortCountry: '',
			dischargePortAddress: '',
			dischargePortCity: '',
			dischargePortCountry: ''
		};
	}

	handleOnSubmit = (event) => {
		//TODO: make real api call
		event.preventDefault();
		this.props.toggleLoadingState();
		const requestJSON = JSON.stringify({
			purchaseOrderId: this.props.purchaseOrder['state']['data']['purchaseOrderId'],
			locType: this.state.locType,
			locExpiryDate: this.state.locExpiryDate,
			advisingBank: this.state.advisingBank,
			issuingBank: this.state.issuingBank,
			locValue: this.state.locValue,
			loadingPortAddress: this.state.loadingPortAddress,
			loadingPortCity: this.state.loadingPortCity,
			loadingPortCountry: this.state.loadingPortCountry,
			dischargePortAddress: this.state.dischargePortAddress,
			dischargePortCity: this.state.dischargePortCity,
			dischargePortCountry: this.state.dischargePortCountry
		});
		//TODO: update state with appropriate result
		console.log(requestJSON);
		setTimeout(() => {
			this.props.toggleLoadingState();
			this.props.handleOnApplyLOC({
				state: {
					data: {
						locId: '762a3b84-cdeb-4c20-83e0-3092d75d955f',
						locType: 'A',
						locExpiryDate: '01-01-2020',
						seller: 'O=ChittagongTraders, L=Chittagong, C=BD',
						buyer: 'O=KowloonTraders, L=Kowloon, C=HK',
						advisingBank: 'O=DhakaBank, L=Dhaka, C=BD',
						issuingBank: 'O=KowloonBank, L=Kowloon, C=HK',
						locValue: 10,
						loadingPortAddress: 'A',
						loadingPortCity: 'A',
						loadingPortCountry: 'A',
						dischargePortAddress: 'A',
						dischargePortCity: 'A',
						dischargePortCountry: 'A',
						productName: 'B',
						productQuantity: 1,
						productPriceInUSD: 1,
						productGrossWeightInKG: 1,
						locStatus: 'APPLIED',
						purchaseOrderId: 'd7641897-88f4-413a-a2d7-7419e1df6d44',
						billOfLadingId: null
					}
				}
			});
		}, 1000);
	};

	render() {
		return (
			<form id="apply-loc-screen" className="ui large form segment" onSubmit={this.handleOnSubmit}>
				<div className="field">
					<label>Letter of Credit Type</label>
					<input
						type="text"
						value={this.state.locType}
						onChange={(event) => this.setState({ locType: event.target.value })}
						placeholder="Letter of Credit Type"
						required
					/>
				</div>

				<div className="field">
					<label>Letter of Credit Expiry Date</label>
					<input
						type="date"
						value={this.state.locExpiryDate}
						onChange={(event) => this.setState({ locExpiryDate: event.target.value })}
						placeholder="Letter of Credit Expiry Date"
						required
					/>
				</div>

				<div className="field">
					<label>Advising Bank</label>
					<select
						value={this.state.advisingBank}
						onChange={(event) => this.setState({ advisingBank: event.target.value })}
						required
					>
						{this.props.peers.map((peer) => (
							<option key={peer} value={peer}>
								{peer}
							</option>
						))}
					</select>
				</div>

				<div className="field">
					<label>Issuing Bank</label>
					<select
						value={this.state.issuingBank}
						onChange={(event) => this.setState({ issuingBank: event.target.value })}
						required
					>
						{this.props.peers.map((peer) => (
							<option key={peer} value={peer}>
								{peer}
							</option>
						))}
					</select>
				</div>

				<div className="field">
					<label>Letter of Credit Value ($)</label>
					<input
						type="number"
						min="1"
						value={this.state.locValue}
						onChange={(event) => this.setState({ locValue: event.target.value })}
						placeholder="Product Quantity"
						required
					/>
				</div>

				<div className="field">
					<label>Loading Port Name</label>
					<input
						type="text"
						value={this.state.loadingPortAddress}
						onChange={(event) => this.setState({ loadingPortAddress: event.target.value })}
						placeholder="Loading Port Name"
						required
					/>
				</div>
				<div className="field">
					<label>Loading Port City</label>
					<input
						type="text"
						value={this.state.loadingPortCity}
						onChange={(event) => this.setState({ loadingPortCity: event.target.value })}
						placeholder="Loading Port City"
						required
					/>
				</div>
				<div className="field">
					<label>Loading Port Country</label>
					<input
						type="text"
						value={this.state.loadingPortCountry}
						onChange={(event) => this.setState({ loadingPortCountry: event.target.value })}
						placeholder="Loading Port Country"
						required
					/>
				</div>

				<div className="field">
					<label>Discharge Port Name</label>
					<input
						type="text"
						value={this.state.dischargePortAddress}
						onChange={(event) => this.setState({ dischargePortAddress: event.target.value })}
						placeholder="Discharge Port Name"
						required
					/>
				</div>
				<div className="field">
					<label>Discharge Prot City</label>
					<input
						type="text"
						value={this.state.dischargePortCity}
						onChange={(event) => this.setState({ dischargePortCity: event.target.value })}
						placeholder="Discharge Prot City"
						required
					/>
				</div>
				<div className="field">
					<label>Discharge Port Country</label>
					<input
						type="text"
						value={this.state.dischargePortCountry}
						onChange={(event) => this.setState({ dischargePortCountry: event.target.value })}
						placeholder="Discharge Port Country"
						required
					/>
				</div>

				<button className="ui blue fluid button" type="submit">
					Submit
				</button>
			</form>
		);
	}
}
