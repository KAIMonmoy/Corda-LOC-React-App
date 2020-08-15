import React, { Component } from 'react';

export default class CreatePurchaseOrderScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			buyer: '',
			purchaseOrderIssueDate: '',
			productName: '',
			productQuantity: 0,
			productPriceInUSD: 0,
			productGrossWeightInKG: 0
		};
	}

	handleOnSubmit = (event) => {
		event.preventDefault();

		const baseURL = `http://${window.location.host}/api/example`;

		this.props.toggleLoadingState();

		const requestJSON = JSON.stringify({
			buyer: this.state.buyer,
			purchaseOrderIssueDate: this.state.purchaseOrderIssueDate,
			productName: this.state.productName,
			productQuantity: this.state.productQuantity,
			productPriceInUSD: this.state.productPriceInUSD,
			productGrossWeightInKG: this.state.productGrossWeightInKG
		});
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: requestJSON
		};
		fetch(`${baseURL}/create-purchase-order`, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				this.props.handleOnCreatePurchaseOrder({
					state: {
						data: result['purchase_order']
					}
				});
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
					<label>Buyer</label>
					<select
						value={this.state.buyer}
						onChange={(event) => this.setState({ buyer: event.target.value })}
						required
					>
						<option key="" value="" />
						{this.props.peers.map((peer) => (
							<option key={peer} value={peer}>
								{peer}
							</option>
						))}
					</select>
				</div>

				<div className="field">
					<label>Purchase Issue Date</label>
					<input
						type="date"
						value={this.state.purchaseOrderIssueDate}
						onChange={(event) => this.setState({ purchaseOrderIssueDate: event.target.value })}
						placeholder="Purchase Issue Date"
						required
					/>
				</div>

				<div className="field">
					<label>Product Name</label>
					<input
						type="text"
						value={this.state.productName}
						onChange={(event) => this.setState({ productName: event.target.value })}
						placeholder="Product Name"
						required
					/>
				</div>

				<div className="field">
					<label>Product Quantity</label>
					<input
						type="number"
						min="1"
						value={this.state.productQuantity}
						onChange={(event) => this.setState({ productQuantity: event.target.value })}
						placeholder="Product Quantity"
						required
					/>
				</div>

				<div className="field">
					<label>Product Price ($)</label>
					<input
						type="number"
						min="1"
						value={this.state.productPriceInUSD}
						onChange={(event) => this.setState({ productPriceInUSD: event.target.value })}
						placeholder="Product Price ($)"
						required
					/>
				</div>

				<div className="field">
					<label>Product Gross Weight (KG)</label>
					<input
						type="number"
						min="1"
						value={this.state.productGrossWeightInKG}
						onChange={(event) => this.setState({ productGrossWeightInKG: event.target.value })}
						placeholder="Product Gross Weight (KG)"
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
