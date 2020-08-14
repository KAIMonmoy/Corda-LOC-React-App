import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Transaction.css';
import { letterOfCreditStages, letterOfCreditStageIcons, getTransactionStatus } from './LetterOfCreditStages';

import TransactionSteps from './TransactionSteps';
import LoadingScreen from './LoadingScreen';
import ShippingScreen from './ShippingScreen';
import PayingScreen from './SendingMoneyScreen';
import CreatePurchaseOrderScreen from './CreatePurchaseOrderScreen';
import ApplyForLOCScreen from './ApplyForLOCScreen';
import OtherPartyTaskScreen from './OtherPartyTaskScreen';
import ApproveLOCScreen from './ApproveLOCScreen';
import ShipProductsScreen from './ShipProductsScreen';
import PaySellerScreen from './PaySellerScreen';
import PayAdvisingBankScreen from './PayAdvisingBankScreen';
import PayIssuingBankScreen from './PayIssuingBankScreen';

export default class Transaction extends Component {
	constructor(props) {
		super(props);

		this.state = {
			transaction: [],
			isFetching: true,
			isLoading: false
		};
	}

	componentDidMount() {
		console.log('Transaction CDM');

		const txType = this.props.match.params.type;
		const stateId = this.props.match.params.type;
		let txURL = `http://${window.location.host}/api/example/transaction`;

		if (txType === 'po' || txType === 'loc') {
			txURL = `${txURL}/${txType}/${stateId}`;
		}

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

		if (txType === 'new') {
			setTimeout(() => {
				this.setState({
					transaction: [],
					isFetching: false
				});
			}, 0);
		} else if (txType === 'po') {
			setTimeout(() => {
				this.setState({
					transaction: [
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
					],
					isFetching: false
				});
			}, 1000);
		} else if (txType === 'loc') {
			setTimeout(() => {
				this.setState({
					transaction: [
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
					],
					isFetching: false
				});
			}, 1000);
		}
	}

	toggleLoadingState = () => {
		this.setState((state) => {
			return { isLoading: !state.isLoading };
		});
	};

	getLoadingScreen = (txStateNo, isFetching) => {
		if (isFetching) return <LoadingScreen />;
		if (txStateNo === 4) return <ShippingScreen />;
		if (txStateNo === 5 || txStateNo === 6 || txStateNo === 7) return <PayingScreen />;
		return <LoadingScreen />;
	};

	handleOnCreatePurchaseOrder = (purchaseOrder) => {
		this.props.history.replace(`/transaction/po/${purchaseOrder['state']['data']['purchaseOrderId']}`);
		this.setState({
			transaction: [ purchaseOrder, null, null ]
		});
	};

	handleOnApplyLOC = (loc) => {
		this.props.history.replace(`/transaction/loc/${loc['state']['data']['locId']}`);
		this.setState({
			transaction: [ this.state.transaction[0], loc, null ]
		});
	};

	handleOnApproveLOC = (loc) => {
		this.setState({
			transaction: [ this.state.transaction[0], loc, null ]
		});
	};

	handleModifiedLoCAndBoL = (loc, bol) => {
		this.setState({
			transaction: [ this.state.transaction[0], loc, bol ]
		});
	};

	render() {
		const transaction = this.state.transaction;
		const txStatus = getTransactionStatus(transaction);
		const txStatusNo = letterOfCreditStages.indexOf(txStatus);
		const myIdentity = this.props.myIdentity;
		return this.state.isLoading || this.state.isFetching ? (
			this.getLoadingScreen(txStatusNo, this.state.isFetching)
		) : (
			<React.Fragment>
				<Link to="/">
					<button className="red circular ui icon button close-button">
						<i className="big icon close" />
					</button>
				</Link>

				{transaction.length > 0 &&
				transaction[0] != null && (
					<React.Fragment>
						<button
							className="green rounded ui icon button po-button"
							onClick={() => {
								if (!document.querySelector('#tx-main').classList.contains('zero-opacity')) {
									document.querySelector('#po-modal').classList.add('active');
									document.querySelector('#tx-main').classList.add('zero-opacity');
								}
							}}
						>
							<i className="huge clipboard list icon" />
							<br />
							<br />
							Purchase Order
						</button>
						<div id="po-modal" className="ui modal">
							<div className="header">Purchase Order</div>
							<div className="scrolling content">
								<table className="ui inverted blue celled table">
									<thead>
										<tr>
											<th className="six wide">Field Name</th>
											<th className="ten wide">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Purchase Order Id</td>
											<td>{transaction[0]['state']['data']['purchaseOrderId']}</td>
										</tr>
										<tr>
											<td>Seller</td>
											<td>{transaction[0]['state']['data']['seller']}</td>
										</tr>
										<tr>
											<td>Buyer</td>
											<td>{transaction[0]['state']['data']['buyer']}</td>
										</tr>
										<tr>
											<td>Purchase Order Issue Date</td>
											<td>{transaction[0]['state']['data']['purchaseOrderIssueDate']}</td>
										</tr>
										<tr>
											<td>Product Name</td>
											<td>{transaction[0]['state']['data']['productName']}</td>
										</tr>
										<tr>
											<td>Product Quantity</td>
											<td>{transaction[0]['state']['data']['productQuantity']}</td>
										</tr>
										<tr>
											<td>Product Price</td>
											<td>$ {transaction[0]['state']['data']['productPriceInUSD']}</td>
										</tr>
										<tr>
											<td>Product Gross Weight</td>
											<td>{transaction[0]['state']['data']['productGrossWeightInKG']} KG</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="actions">
								<div
									className="ui cancel button"
									onClick={() => {
										document.querySelector('#po-modal').classList.remove('active');
										document.querySelector('#tx-main').classList.remove('zero-opacity');
									}}
								>
									Close
								</div>
							</div>
						</div>
					</React.Fragment>
				)}
				{transaction.length > 0 &&
				txStatusNo > 1 &&
				transaction[1] != null && (
					<React.Fragment>
						<button
							className="green rounded ui icon button loc-button"
							onClick={() => {
								if (!document.querySelector('#tx-main').classList.contains('zero-opacity')) {
									document.querySelector('#loc-modal').classList.add('active');
									document.querySelector('#tx-main').classList.add('zero-opacity');
								}
							}}
						>
							<i className="huge file alternate icon" />
							<br />
							<br />
							Letter of Credit
						</button>
						<div id="loc-modal" className="ui modal">
							<div className="header">Letter of Credit</div>
							<div className="scrolling content">
								<table className="ui inverted blue celled table">
									<thead>
										<tr>
											<th className="six wide">Field Name</th>
											<th className="ten wide">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Letter of Credit Id</td>
											<td>{transaction[1]['state']['data']['locId']}</td>
										</tr>
										<tr>
											<td>Letter of Credit Type</td>
											<td>{transaction[1]['state']['data']['locType']}</td>
										</tr>
										<tr>
											<td>Letter of Credit ExpiryDate</td>
											<td>{transaction[1]['state']['data']['locExpiryDate']}</td>
										</tr>
										<tr>
											<td>Seller</td>
											<td>{transaction[1]['state']['data']['seller']}</td>
										</tr>
										<tr>
											<td>Buyer</td>
											<td>{transaction[1]['state']['data']['buyer']}</td>
										</tr>
										<tr>
											<td>Advising Bank</td>
											<td>{transaction[1]['state']['data']['advisingBank']}</td>
										</tr>
										<tr>
											<td>Issuing Bank</td>
											<td>{transaction[1]['state']['data']['issuingBank']}</td>
										</tr>
										<tr>
											<td>Letter of Credit Value</td>
											<td>$ {transaction[1]['state']['data']['locValue']}</td>
										</tr>
										<tr>
											<td>Loading Port Name</td>
											<td>{transaction[1]['state']['data']['loadingPortAddress']}</td>
										</tr>
										<tr>
											<td>Loading Port City</td>
											<td>{transaction[1]['state']['data']['loadingPortCity']}</td>
										</tr>
										<tr>
											<td>Loading Port Country</td>
											<td>{transaction[1]['state']['data']['loadingPortCountry']}</td>
										</tr>
										<tr>
											<td>Discharge Port Name</td>
											<td>{transaction[1]['state']['data']['dischargePortAddress']}</td>
										</tr>
										<tr>
											<td>Discharge Port City</td>
											<td>{transaction[1]['state']['data']['dischargePortCity']}</td>
										</tr>
										<tr>
											<td>Discharge Port Country</td>
											<td>{transaction[1]['state']['data']['dischargePortCountry']}</td>
										</tr>
										<tr>
											<td>Product Name</td>
											<td>{transaction[1]['state']['data']['productName']}</td>
										</tr>
										<tr>
											<td>Product Quantity</td>
											<td>{transaction[1]['state']['data']['productQuantity']}</td>
										</tr>
										<tr>
											<td>Product Price</td>
											<td>$ {transaction[1]['state']['data']['productPriceInUSD']}</td>
										</tr>
										<tr>
											<td>Product Gross Weight</td>
											<td>{transaction[1]['state']['data']['productGrossWeightInKG']} KG</td>
										</tr>
										<tr>
											<td>Letter of Credit Status</td>
											<td>{transaction[1]['state']['data']['locStatus']}</td>
										</tr>
										<tr>
											<td>Purchase Order Id</td>
											<td>{transaction[1]['state']['data']['purchaseOrderId']}</td>
										</tr>
										{txStatusNo > 4 && (
											<tr>
												<td>Bill Of Lading Id</td>
												<td>{transaction[1]['state']['data']['billOfLadingId']}</td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
							<div className="actions">
								<div
									className="ui cancel button"
									onClick={() => {
										document.querySelector('#loc-modal').classList.remove('active');
										document.querySelector('#tx-main').classList.remove('zero-opacity');
									}}
								>
									Close
								</div>
							</div>
						</div>
					</React.Fragment>
				)}
				{transaction.length > 0 &&
				txStatusNo > 4 &&
				transaction[2] != null && (
					<React.Fragment>
						<button
							className="green rounded ui icon button bol-button"
							onClick={() => {
								if (!document.querySelector('#tx-main').classList.contains('zero-opacity')) {
									document.querySelector('#bol-modal').classList.add('active');
									document.querySelector('#tx-main').classList.add('zero-opacity');
								}
							}}
						>
							<i className="huge newspaper icon" />
							<br />
							<br />
							Bill of Lading
						</button>
						<div id="bol-modal" className="ui modal">
							<div className="header">Bill of Lading</div>
							<div className="scrolling content">
								<table className="ui inverted blue celled table">
									<thead>
										<tr>
											<th className="six wide">Field Name</th>
											<th className="ten wide">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Bill of Lading Id</td>
											<td>{transaction[2]['state']['data']['billOfLadingId']}</td>
										</tr>
										<tr>
											<td>Current Owner</td>
											<td>{transaction[2]['state']['data']['currentOwner']}</td>
										</tr>

										<tr>
											<td>Seller</td>
											<td>{transaction[2]['state']['data']['seller']}</td>
										</tr>
										<tr>
											<td>Buyer</td>
											<td>{transaction[2]['state']['data']['buyer']}</td>
										</tr>
										<tr>
											<td>Advising Bank</td>
											<td>{transaction[2]['state']['data']['advisingBank']}</td>
										</tr>
										<tr>
											<td>Issuing Bank</td>
											<td>{transaction[2]['state']['data']['issuingBank']}</td>
										</tr>

										<tr>
											<td>Carrier Company Name</td>
											<td>{transaction[2]['state']['data']['carrierCompanyName']}</td>
										</tr>
										<tr>
											<td>Carrier Name</td>
											<td>{transaction[2]['state']['data']['carrierName']}</td>
										</tr>
										<tr>
											<td>Loading Date</td>
											<td>{transaction[2]['state']['data']['loadingDate']}</td>
										</tr>
										<tr>
											<td>Discharge Date</td>
											<td>{transaction[2]['state']['data']['dischargeDate']}</td>
										</tr>

										<tr>
											<td>Loading Port Name</td>
											<td>{transaction[2]['state']['data']['loadingPortAddress']}</td>
										</tr>
										<tr>
											<td>Loading Port City</td>
											<td>{transaction[2]['state']['data']['loadingPortCity']}</td>
										</tr>
										<tr>
											<td>Loading Port Country</td>
											<td>{transaction[2]['state']['data']['loadingPortCountry']}</td>
										</tr>
										<tr>
											<td>Discharge Port Name</td>
											<td>{transaction[2]['state']['data']['dischargePortAddress']}</td>
										</tr>
										<tr>
											<td>Discharge Port City</td>
											<td>{transaction[2]['state']['data']['dischargePortCity']}</td>
										</tr>
										<tr>
											<td>Discharge Port Country</td>
											<td>{transaction[2]['state']['data']['dischargePortCountry']}</td>
										</tr>
										<tr>
											<td>Product Name</td>
											<td>{transaction[2]['state']['data']['productName']}</td>
										</tr>
										<tr>
											<td>Product Shipment Description</td>
											<td>{transaction[2]['state']['data']['productDescription']}</td>
										</tr>
										<tr>
											<td>Product Quantity</td>
											<td>{transaction[2]['state']['data']['productQuantity']}</td>
										</tr>
										<tr>
											<td>Product Price</td>
											<td>$ {transaction[2]['state']['data']['productPriceInUSD']}</td>
										</tr>
										<tr>
											<td>Product Gross Weight</td>
											<td>{transaction[2]['state']['data']['productGrossWeightInKG']} KG</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="actions">
								<div
									className="ui cancel button"
									onClick={() => {
										document.querySelector('#bol-modal').classList.remove('active');
										document.querySelector('#tx-main').classList.remove('zero-opacity');
									}}
								>
									Close
								</div>
							</div>
						</div>
					</React.Fragment>
				)}

				<div id="tx-main" className="ui grid full-width">
					<div className="five wide column full-height center-items">
						<TransactionSteps txStatus={letterOfCreditStages[txStatusNo]} />
					</div>
					<div className="eleven wide column full-height">
						<div className="ui grid">
							<div className="thirteen wide column full-height center-items">
								{txStatusNo === 0 && (
									<CreatePurchaseOrderScreen
										{...this.props}
										handleOnCreatePurchaseOrder={this.handleOnCreatePurchaseOrder}
										toggleLoadingState={this.toggleLoadingState}
									/>
								)}
								{/* //! OtherPartyTaskScreen Demo ---------------------------- */}
								{/* <OtherPartyTaskScreen
									icon={letterOfCreditStageIcons[txStatusNo]}
									message={
										<p>
											<br /> Buyer: {myIdentity} <br /> is working on <br /> {txStatus}
										</p>
									}
								/> */}
								{/* //! ------------------------------------------------------- */}
								{txStatusNo === 1 && (
									<ApplyForLOCScreen
										{...this.props}
										purchaseOrder={this.state.transaction[0]}
										handleOnApplyLOC={this.handleOnApplyLOC}
										toggleLoadingState={this.toggleLoadingState}
									/>
								)}
								{txStatusNo === 2 && (
									<ApproveLOCScreen
										{...this.props}
										loc={this.state.transaction[0]}
										handleOnApproveLOC={this.handleOnApproveLOC}
										toggleLoadingState={this.toggleLoadingState}
									/>
								)}
								{txStatusNo === 3 && (
									<OtherPartyTaskScreen
										icon={letterOfCreditStageIcons[3]}
										message={
											<p>
												<br /> {letterOfCreditStages[3]}!
											</p>
										}
									/>
								)}
								{txStatusNo === 4 && (
									<ShipProductsScreen
										{...this.props}
										loc={this.state.transaction[1]}
										handleModifiedLoCAndBoL={this.handleModifiedLoCAndBoL}
										toggleLoadingState={this.toggleLoadingState}
									/>
								)}
								{txStatusNo === 5 && (
									<PaySellerScreen
										{...this.props}
										loc={this.state.transaction[1]}
										handleModifiedLoCAndBoL={this.handleModifiedLoCAndBoL}
										toggleLoadingState={this.toggleLoadingState}
									/>
								)}
								{txStatusNo === 6 && (
									<PayAdvisingBankScreen
										{...this.props}
										loc={this.state.transaction[1]}
										handleModifiedLoCAndBoL={this.handleModifiedLoCAndBoL}
										toggleLoadingState={this.toggleLoadingState}
									/>
								)}
								{txStatusNo === 7 && (
									<PayIssuingBankScreen
										{...this.props}
										loc={this.state.transaction[1]}
										handleModifiedLoCAndBoL={this.handleModifiedLoCAndBoL}
										toggleLoadingState={this.toggleLoadingState}
									/>
								)}
								{txStatusNo === 8 && (
									<OtherPartyTaskScreen
										icon={letterOfCreditStageIcons[8]}
										message={
											<p>
												<br /> {letterOfCreditStages[8]}!
											</p>
										}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
