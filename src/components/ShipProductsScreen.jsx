import React, { Component } from 'react';

import './Transaction.css';

export default class ShipProductsScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			carrierCompanyName: '',
			carrierName: '',
			loadingDate: '',
			dischargeDate: '',
			productDescription: ''
		};
	}

	handleOnSubmit = (event) => {
		//TODO: make real api call
		event.preventDefault();
		this.props.toggleLoadingState();
		const requestJSON = JSON.stringify({
			locId: this.props.loc['state']['data']['locId'],
			carrierCompanyName: this.state.carrierCompanyName,
			carrierName: this.state.carrierName,
			loadingDate: this.state.loadingDate,
			dischargeDate: this.state.dischargeDate,
			productDescription: this.state.productDescription
		});
		//TODO: update state with appropriate result
		console.log(requestJSON);
		setTimeout(() => {
			this.props.toggleLoadingState();
			this.props.handleModifiedLoCAndBoL(
				{
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
							locStatus: 'SHIPPED',
							purchaseOrderId: 'd7641897-88f4-413a-a2d7-7419e1df6d44',
							billOfLadingId: '22b7438c-db9c-4477-8f75-304240780b2e'
						}
					}
				},
				{
					state: {
						data: {
							billOfLadingId: '22b7438c-db9c-4477-8f75-304240780b2e',
							currentOwner: 'O=ChittagongTraders, L=Chittagong, C=BD',
							seller: 'O=ChittagongTraders, L=Chittagong, C=BD',
							buyer: 'O=KowloonTraders, L=Kowloon, C=HK',
							advisingBank: 'O=DhakaBank, L=Dhaka, C=BD',
							issuingBank: 'O=KowloonBank, L=Kowloon, C=HK',
							carrierCompanyName: 'A',
							carrierName: 'A',
							loadingDate: '01-01-2020',
							dischargeDate: '01-01-2020',
							productName: 'B',
							productDescription: '2 items damaged.',
							productQuantity: 1,
							productPriceInUSD: 1,
							productGrossWeightInKG: 1,
							loadingPortAddress: 'A',
							loadingPortCity: 'A',
							loadingPortCountry: 'A',
							dischargePortAddress: 'A',
							dischargePortCity: 'A',
							dischargePortCountry: 'A'
						}
					}
				}
			);
		}, 5000);
	};

	render() {
		return (
			<form className="ui large form segment" onSubmit={this.handleOnSubmit}>
				<div className="field">
					<label>Carrier Company Name</label>
					<input
						type="text"
						value={this.state.carrierCompanyName}
						onChange={(event) => this.setState({ carrierCompanyName: event.target.value })}
						placeholder="Carrier Company Name"
						required
					/>
				</div>

				<div className="field">
					<label>Carrier Name</label>
					<input
						type="text"
						value={this.state.carrierName}
						onChange={(event) => this.setState({ carrierName: event.target.value })}
						placeholder="Carrier Name"
						required
					/>
				</div>

				<div className="field">
					<label>Loading Date</label>
					<input
						type="date"
						value={this.state.loadingDate}
						onChange={(event) => this.setState({ loadingDate: event.target.value })}
						placeholder="Loading Date"
						required
					/>
				</div>

				<div className="field">
					<label>Discharge Date</label>
					<input
						type="date"
						value={this.state.dischargeDate}
						onChange={(event) => this.setState({ dischargeDate: event.target.value })}
						placeholder="Discharge Date"
						required
					/>
				</div>

				<div className="field">
					<label>Product Shipment Description</label>
					<input
						type="text"
						value={this.state.productDescription}
						onChange={(event) => this.setState({ productDescription: event.target.value })}
						placeholder="Shipment Description"
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
