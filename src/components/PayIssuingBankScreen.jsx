import React, { Component } from 'react';

export default class PayIssuingBankScreen extends Component {
	handleOnSubmit = (event) => {
		//TODO: make real api call
		event.preventDefault();
		this.props.toggleLoadingState();
		const requestJSON = JSON.stringify({
			locId: this.props.loc['state']['data']['locId'],
			billOfLadingId: this.props.loc['state']['data']['billOfLadingId']
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
							locStatus: 'ISSUING_BANK_PAID',
							purchaseOrderId: 'd7641897-88f4-413a-a2d7-7419e1df6d44',
							billOfLadingId: '22b7438c-db9c-4477-8f75-304240780b2e'
						}
					}
				},
				{
					state: {
						data: {
							billOfLadingId: '22b7438c-db9c-4477-8f75-304240780b2e',
							currentOwner: 'O=KowloonTraders, L=Kowloon, C=HK',
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
			<div className="ui placeholder segment">
				<div className="ui icon header">
					<i className="dollar coin icon" />
					Please complete the payment!
				</div>
				<div className="ui primary button" onClick={this.handleOnSubmit}>
					Pay Issuing Bank
				</div>
			</div>
		);
	}
}
