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
		//TODO: make real api call
		event.preventDefault();
		// 	{
		// 		"buyer": "O=KowloonTraders,L=Kowloon,C=HK",
		// 		"purchaseOrderIssueDate": "01-01-2020",
		// 		"productName": "A",
		// 		"productQuantity": 1,
		// 		"productPriceInUSD": 1,
		// 		"productGrossWeightInKG": 1
		// }
		this.props.toggleLoadingState();
		const requestJSON = JSON.stringify({
			buyer: this.state.buyer,
			purchaseOrderIssueDate: this.state.purchaseOrderIssueDate,
			productName: this.state.productName,
			productQuantity: this.state.productQuantity,
			productPriceInUSD: this.state.productPriceInUSD,
			productGrossWeightInKG: this.state.productGrossWeightInKG
		});
		//TODO: update state with appropriate result
		console.log(requestJSON);
		setTimeout(() => {
			this.props.toggleLoadingState();
			this.props.handleOnCreatePurchaseOrder({
				state: {
					data: {
						purchaseOrderId: '74ea7485-c5f8-48c4-8db2-ddbd16b8bf21',
						seller: 'O=ChittagongTraders, L=Chittagong, C=BD',
						buyer: 'O=KowloonTraders, L=Kowloon, C=HK',
						purchaseOrderIssueDate: '01-01-2020',
						productName: 'A',
						productQuantity: 1,
						productPriceInUSD: 1,
						productGrossWeightInKG: 1
					}
				}
			});
		}, 1000);
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
