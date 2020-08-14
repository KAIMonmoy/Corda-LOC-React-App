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
		// ! Fetch Real Data
		// fetch(`http://${window.location.host}/api/example/peers`)
		// 	.then((res) => res.json())
		// 	.then((json) => {
		// 		this.setState({
		// 			transactions: json
		// 		});
		// 	})
		// 	.catch((err) => {
		// 		console.error(err);
		// 	});

		setTimeout(() => {
			this.setState({
				transactions: [
					{
						states: [
							{
								state: {
									data: {
										'@class': 'com.example.state.PurchaseOrderState',
										purchaseOrderId: '01426139-a1d6-4d00-9db7-d84d94d3dc01',
										seller: 'O=ChittagongTraders, L=Chittagong, C=BD',
										buyer: 'O=KowloonTraders, L=Kowloon, C=HK',
										purchaseOrderIssueDate: '01-01-2020',
										productName: 'C',
										productQuantity: 1,
										productPriceInUSD: 1,
										productGrossWeightInKG: 1
									},
									contract: 'com.example.contract.LetterOfCreditContract',
									notary: 'O=Notary, L=London, C=GB',
									encumbrance: null,
									constraint: {
										'@class': 'net.corda.core.contracts.SignatureAttachmentConstraint',
										key:
											'aSq9DsNNvGhYxYyqA9wd2eduEAZ5AXWgJTbTEw3G5d2maAq8vtLE4kZHgCs5jcB1N31cx1hpsLeqG2ngSysVHqcXhbNts6SkRWDaV7xNcr6MtcbufGUchxredBb6'
									}
								},
								ref: {
									txhash: 'BA1A4D4F6F6EC72B44E267FA2FFAC219D4A8D5FCB11274D1B58AD80C63A2F9DA',
									index: 0
								}
							},
							null,
							null
						]
					},
					{
						states: [
							{
								state: {
									data: {
										'@class': 'com.example.state.PurchaseOrderState',
										purchaseOrderId: '74ea7485-c5f8-48c4-8db2-ddbd16b8bf21',
										seller: 'O=ChittagongTraders, L=Chittagong, C=BD',
										buyer: 'O=KowloonTraders, L=Kowloon, C=HK',
										purchaseOrderIssueDate: '01-01-2020',
										productName: 'A',
										productQuantity: 1,
										productPriceInUSD: 1,
										productGrossWeightInKG: 1
									},
									contract: 'com.example.contract.LetterOfCreditContract',
									notary: 'O=Notary, L=London, C=GB',
									encumbrance: null,
									constraint: {
										'@class': 'net.corda.core.contracts.SignatureAttachmentConstraint',
										key:
											'aSq9DsNNvGhYxYyqA9wd2eduEAZ5AXWgJTbTEw3G5d2maAq8vtLE4kZHgCs5jcB1N31cx1hpsLeqG2ngSysVHqcXhbNts6SkRWDaV7xNcr6MtcbufGUchxredBb6'
									}
								},
								ref: {
									txhash: '49F7E3ABD28F2BAE9F199F5E24483A95BC12E8C1DF15F652145F806E184B1EA9',
									index: 0
								}
							},
							{
								state: {
									data: {
										'@class': 'com.example.state.LetterOfCreditState',
										locId: '14703c47-5deb-4162-afb8-40e167804165',
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
										productName: 'A',
										productQuantity: 1,
										productPriceInUSD: 1,
										productGrossWeightInKG: 1,
										locStatus: 'APPLIED',
										purchaseOrderId: '74ea7485-c5f8-48c4-8db2-ddbd16b8bf21',
										billOfLadingId: null
									},
									contract: 'com.example.contract.LetterOfCreditContract',
									notary: 'O=Notary, L=London, C=GB',
									encumbrance: null,
									constraint: {
										'@class': 'net.corda.core.contracts.SignatureAttachmentConstraint',
										key:
											'aSq9DsNNvGhYxYyqA9wd2eduEAZ5AXWgJTbTEw3G5d2maAq8vtLE4kZHgCs5jcB1N31cx1hpsLeqG2ngSysVHqcXhbNts6SkRWDaV7xNcr6MtcbufGUchxredBb6'
									}
								},
								ref: {
									txhash: 'CF139D229417E1D717CBF6E5340C8A8DC557E7798E736236B341ECB612C176F8',
									index: 0
								}
							},
							null
						]
					},
					{
						states: [
							{
								state: {
									data: {
										'@class': 'com.example.state.PurchaseOrderState',
										purchaseOrderId: '74ea7485-c5f8-48c4-8db2-ddbd16b8bf21',
										seller: 'O=ChittagongTraders, L=Chittagong, C=BD',
										buyer: 'O=KowloonTraders, L=Kowloon, C=HK',
										purchaseOrderIssueDate: '01-01-2020',
										productName: 'A',
										productQuantity: 1,
										productPriceInUSD: 1,
										productGrossWeightInKG: 1
									},
									contract: 'com.example.contract.LetterOfCreditContract',
									notary: 'O=Notary, L=London, C=GB',
									encumbrance: null,
									constraint: {
										'@class': 'net.corda.core.contracts.SignatureAttachmentConstraint',
										key:
											'aSq9DsNNvGhYxYyqA9wd2eduEAZ5AXWgJTbTEw3G5d2maAq8vtLE4kZHgCs5jcB1N31cx1hpsLeqG2ngSysVHqcXhbNts6SkRWDaV7xNcr6MtcbufGUchxredBb6'
									}
								},
								ref: {
									txhash: '49F7E3ABD28F2BAE9F199F5E24483A95BC12E8C1DF15F652145F806E184B1EA9',
									index: 0
								}
							},
							{
								state: {
									data: {
										'@class': 'com.example.state.LetterOfCreditState',
										locId: '14703c47-5dxb-4162-afb8-40e167804165',
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
										productName: 'A',
										productQuantity: 1,
										productPriceInUSD: 1,
										productGrossWeightInKG: 1,
										locStatus: 'REJECTED',
										purchaseOrderId: '74ea7485-c5f8-48c4-8db2-ddbd16b8bf21',
										billOfLadingId: null
									},
									contract: 'com.example.contract.LetterOfCreditContract',
									notary: 'O=Notary, L=London, C=GB',
									encumbrance: null,
									constraint: {
										'@class': 'net.corda.core.contracts.SignatureAttachmentConstraint',
										key:
											'aSq9DsNNvGhYxYyqA9wd2eduEAZ5AXWgJTbTEw3G5d2maAq8vtLE4kZHgCs5jcB1N31cx1hpsLeqG2ngSysVHqcXhbNts6SkRWDaV7xNcr6MtcbufGUchxredBb6'
									}
								},
								ref: {
									txhash: 'CF139D229417E1D717CBF6E5340C8A8DC557E7798E736236B341ECB612C176F8',
									index: 0
								}
							},
							null
						]
					},
					{
						states: [
							{
								state: {
									data: {
										'@class': 'com.example.state.PurchaseOrderState',
										purchaseOrderId: 'd7641897-88f4-413a-a2d7-7419e1df6d44',
										seller: 'O=ChittagongTraders, L=Chittagong, C=BD',
										buyer: 'O=KowloonTraders, L=Kowloon, C=HK',
										purchaseOrderIssueDate: '01-01-2020',
										productName: 'B',
										productQuantity: 1,
										productPriceInUSD: 1,
										productGrossWeightInKG: 1
									},
									contract: 'com.example.contract.LetterOfCreditContract',
									notary: 'O=Notary, L=London, C=GB',
									encumbrance: null,
									constraint: {
										'@class': 'net.corda.core.contracts.SignatureAttachmentConstraint',
										key:
											'aSq9DsNNvGhYxYyqA9wd2eduEAZ5AXWgJTbTEw3G5d2maAq8vtLE4kZHgCs5jcB1N31cx1hpsLeqG2ngSysVHqcXhbNts6SkRWDaV7xNcr6MtcbufGUchxredBb6'
									}
								},
								ref: {
									txhash: '9384052071E15B4D809556C63588EA8D17578730D43FF10D5C1AAA9DC7A80C8F',
									index: 0
								}
							},
							{
								state: {
									data: {
										'@class': 'com.example.state.LetterOfCreditState',
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
									},
									contract: 'com.example.contract.LetterOfCreditContract',
									notary: 'O=Notary, L=London, C=GB',
									encumbrance: null,
									constraint: {
										'@class': 'net.corda.core.contracts.SignatureAttachmentConstraint',
										key:
											'aSq9DsNNvGhYxYyqA9wd2eduEAZ5AXWgJTbTEw3G5d2maAq8vtLE4kZHgCs5jcB1N31cx1hpsLeqG2ngSysVHqcXhbNts6SkRWDaV7xNcr6MtcbufGUchxredBb6'
									}
								},
								ref: {
									txhash: 'A23AA0BAC9FFE6C71A71FD6060C37E9B18399C625616BA50763AD534B524FC97',
									index: 0
								}
							},
							{
								state: {
									data: {
										'@class': 'com.example.state.BillOfLadingState',
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
									},
									contract: 'com.example.contract.LetterOfCreditContract',
									notary: 'O=Notary, L=London, C=GB',
									encumbrance: null,
									constraint: {
										'@class': 'net.corda.core.contracts.SignatureAttachmentConstraint',
										key:
											'aSq9DsNNvGhYxYyqA9wd2eduEAZ5AXWgJTbTEw3G5d2maAq8vtLE4kZHgCs5jcB1N31cx1hpsLeqG2ngSysVHqcXhbNts6SkRWDaV7xNcr6MtcbufGUchxredBb6'
									}
								},
								ref: {
									txhash: 'A23AA0BAC9FFE6C71A71FD6060C37E9B18399C625616BA50763AD534B524FC97',
									index: 1
								}
							}
						]
					}
				],
				isLoading: false
			});
		}, 1000);
	}

	triggerReload = () => {
		this.setState({ isLoading: true });
		this.componentDidMount();
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
					<div className="ui card">
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
