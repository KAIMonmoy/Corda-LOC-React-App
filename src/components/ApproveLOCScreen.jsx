import React, { Component } from 'react';

export default class ApproveLOCScreen extends Component {
	handleOnAccept = (event) => {
		//TODO: make real api call
		event.preventDefault();

		this.props.toggleLoadingState();

		//! Make JSON with {this.props.loc['state']['data']['locId'] & "ISSUED" }

		//TODO: update state with appropriate result
		setTimeout(() => {
			this.props.toggleLoadingState();
			this.props.handleOnApproveLOC({
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
						locStatus: 'ISSUED',
						purchaseOrderId: 'd7641897-88f4-413a-a2d7-7419e1df6d44',
						billOfLadingId: null
					}
				}
			});
		}, 1000);
	};

	handleOnReject = (event) => {
		//TODO: make real api call
		event.preventDefault();

		this.props.toggleLoadingState();

		//! Make JSON with {this.props.loc['state']['data']['locId'] & "REJECTED" }

		//TODO: update state with appropriate result
		setTimeout(() => {
			this.props.toggleLoadingState();
			this.props.handleOnApproveLOC({
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
						locStatus: 'REJECTED',
						purchaseOrderId: 'd7641897-88f4-413a-a2d7-7419e1df6d44',
						billOfLadingId: null
					}
				}
			});
		}, 1000);
	};

	render() {
		return (
			<div className="ui placeholder segment">
				<div className="ui two column stackable center aligned grid">
					<div className="ui vertical divider">Or</div>
					<div className="middle aligned row">
						<div className="column">
							<div className="ui icon header">
								<i className="green check circle icon" />
								Accept <br /> Letter of Credit Application
							</div>
							<div className="ui green button" onClick={this.handleOnAccept}>
								Accept
							</div>
						</div>
						<div className="column">
							<div className="ui icon header">
								<i className="red times circle icon" />
								Reject <br /> Letter of Credit Application
							</div>
							<div className="ui red button" onClick={this.handleOnReject}>
								Reject
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
