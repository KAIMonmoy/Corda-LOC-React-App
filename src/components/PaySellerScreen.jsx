import React, { Component } from 'react';

export default class PaySellerScreen extends Component {
	handleOnSubmit = (event) => {
		event.preventDefault();

		const baseURL = `http://${window.location.host}/api/example`;

		this.props.toggleLoadingState();

		const requestJSON = JSON.stringify({
			locId: this.props.loc['state']['data']['locId'],
			billOfLadingId: this.props.loc['state']['data']['billOfLadingId']
		});
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: requestJSON
		};
		fetch(`${baseURL}/pay-seller`, requestOptions)
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
			<div className="ui placeholder segment">
				<div className="ui icon header">
					<i className="dollar coin icon" />
					Please complete the payment!
				</div>
				<div className="ui primary button" onClick={this.handleOnSubmit}>
					Pay Seller
				</div>
			</div>
		);
	}
}
