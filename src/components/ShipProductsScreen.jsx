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
		event.preventDefault();

		const baseURL = `http://${window.location.host}/api/example`;

		this.props.toggleLoadingState();

		const requestJSON = JSON.stringify({
			locId: this.props.loc['state']['data']['locId'],
			carrierCompanyName: this.state.carrierCompanyName,
			carrierName: this.state.carrierName,
			loadingDate: this.state.loadingDate,
			dischargeDate: this.state.dischargeDate,
			productDescription: this.state.productDescription
		});
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: requestJSON
		};
		fetch(`${baseURL}/ship-products`, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				this.props.handleModifiedLoCAndBoL(
					{
						state: {
							data: result['letter_of_credit']
						}
					},
					{
						state: {
							data: result['bill_of_lading']
						}
					}
				);
				this.props.toggleLoadingState();
			})
			.catch((err) => {
				console.error(err);
			});
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
