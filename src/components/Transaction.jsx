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
		const stateId = this.props.match.params.id;

		const baseURL = `http://${window.location.host}/api/example`;

		let txURL;
		if (txType === 'po' || txType === 'loc') {
			txURL = `${baseURL}/transaction/${txType}/${stateId}`;
		}

		if (txType === 'po' || txType === 'loc') {
			fetch(txURL)
				.then((res) => res.json())
				.then((json) => {
					this.setState({
						transaction: json['states'],
						isFetching: false
					});
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			this.setState({
				transaction: [],
				isFetching: false
			});
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
				transaction[0] !== null && (
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
				transaction[1] !== null && (
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
				transaction[2] !== null && (
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
								{txStatusNo === 1 &&
									(myIdentity !== transaction[0]['state']['data']['buyer'] ? (
										<OtherPartyTaskScreen
											icon={letterOfCreditStageIcons[1]}
											message={
												<p>
													<br /> {`Buyer: ${transaction[0]['state']['data']['buyer']}`}
													<br /> is working on
													<br /> {letterOfCreditStages[1]}!
												</p>
											}
										/>
									) : (
										<ApplyForLOCScreen
											{...this.props}
											purchaseOrder={transaction[0]}
											handleOnApplyLOC={this.handleOnApplyLOC}
											toggleLoadingState={this.toggleLoadingState}
										/>
									))}
								{txStatusNo === 2 &&
									(myIdentity !== transaction[1]['state']['data']['issuingBank'] ? (
										<OtherPartyTaskScreen
											icon={letterOfCreditStageIcons[txStatusNo]}
											message={
												<p>
													<br />{' '}
													{`Issuing Bank: ${transaction[1]['state']['data']['issuingBank']}`}
													<br /> is working on
													<br /> {letterOfCreditStages[txStatusNo]}!
												</p>
											}
										/>
									) : (
										<ApproveLOCScreen
											{...this.props}
											loc={transaction[1]}
											handleOnApproveLOC={this.handleOnApproveLOC}
											toggleLoadingState={this.toggleLoadingState}
										/>
									))}
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
								{txStatusNo === 4 &&
									(myIdentity !== transaction[1]['state']['data']['seller'] ? (
										<OtherPartyTaskScreen
											icon={letterOfCreditStageIcons[txStatusNo]}
											message={
												<p>
													<br /> {`Seller: ${transaction[1]['state']['data']['seller']}`}
													<br /> is working on
													<br /> {letterOfCreditStages[txStatusNo]}!
												</p>
											}
										/>
									) : (
										<ShipProductsScreen
											{...this.props}
											loc={transaction[1]}
											handleModifiedLoCAndBoL={this.handleModifiedLoCAndBoL}
											toggleLoadingState={this.toggleLoadingState}
										/>
									))}
								{txStatusNo === 5 &&
									(myIdentity !== transaction[1]['state']['data']['advisingBank'] ? (
										<OtherPartyTaskScreen
											icon={letterOfCreditStageIcons[txStatusNo]}
											message={
												<p>
													<br />{' '}
													{`Advising Bank: ${transaction[1]['state']['data'][
														'advisingBank'
													]}`}
													<br /> is working on
													<br /> {letterOfCreditStages[txStatusNo]}!
												</p>
											}
										/>
									) : (
										<PaySellerScreen
											{...this.props}
											loc={transaction[1]}
											handleModifiedLoCAndBoL={this.handleModifiedLoCAndBoL}
											toggleLoadingState={this.toggleLoadingState}
										/>
									))}
								{txStatusNo === 6 &&
									(myIdentity !== transaction[1]['state']['data']['issuingBank'] ? (
										<OtherPartyTaskScreen
											icon={letterOfCreditStageIcons[txStatusNo]}
											message={
												<p>
													<br />{' '}
													{`Issuing Bank: ${transaction[1]['state']['data']['issuingBank']}`}
													<br /> is working on
													<br /> {letterOfCreditStages[txStatusNo]}!
												</p>
											}
										/>
									) : (
										<PayAdvisingBankScreen
											{...this.props}
											loc={transaction[1]}
											handleModifiedLoCAndBoL={this.handleModifiedLoCAndBoL}
											toggleLoadingState={this.toggleLoadingState}
										/>
									))}
								{txStatusNo === 7 &&
									(myIdentity !== transaction[1]['state']['data']['buyer'] ? (
										<OtherPartyTaskScreen
											icon={letterOfCreditStageIcons[txStatusNo]}
											message={
												<p>
													<br /> {`Buyer: ${transaction[1]['state']['data']['buyer']}`}
													<br /> is working on
													<br /> {letterOfCreditStages[txStatusNo]}!
												</p>
											}
										/>
									) : (
										<PayIssuingBankScreen
											{...this.props}
											loc={transaction[1]}
											handleModifiedLoCAndBoL={this.handleModifiedLoCAndBoL}
											toggleLoadingState={this.toggleLoadingState}
										/>
									))}
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
