import React from 'react';

import { Link } from 'react-router-dom';

import './Home.css';
import BankImage from '../images/bank.png';
import BusinessImage from '../images/business.png';
import { letterOfCreditStages, getTransactionStatus, letterOfCreditStageIcons } from './LetterOfCreditStages';

function TransactionListCard(props) {
	const transaction = props.transaction;

	const txStatus = getTransactionStatus(transaction);
	const txStatusNo = letterOfCreditStages.indexOf(txStatus);
	const isLOCAvailable = txStatusNo > 1;

	let buyer = '';
	let seller = '';
	let issuingBank = '';
	let advisingBank = '';

	let purchaseOrder = null;
	let letterOfCredit = null;

	if (isLOCAvailable) {
		letterOfCredit = transaction[1]['state']['data'];
		buyer = letterOfCredit['buyer'];
		seller = letterOfCredit['seller'];
		issuingBank = letterOfCredit['issuingBank'];
		advisingBank = letterOfCredit['advisingBank'];
	} else {
		purchaseOrder = transaction[0]['state']['data'];
		buyer = purchaseOrder['buyer'];
		seller = purchaseOrder['seller'];
	}

	let txURL = isLOCAvailable
		? `/transaction/loc/${letterOfCredit['locId']}`
		: `/transaction/po/${purchaseOrder['purchaseOrderId']}`;

	return (
		<div className="ui grid">
			<div className="ui two wide column" />

			<div className="ui twelve wide column fluid card">
				<Link to={txURL}>
					<div className="ui grid">
						<div className="ten wide column">
							<div className="ui feed">
								<div className="event">
									<div className="label">
										<img alt="Icon" src={BusinessImage} />
									</div>
									<div className="content">
										<div className="summary">
											<p className="user">Buyer</p> {buyer}
										</div>
									</div>
								</div>
								<div className="event">
									<div className="label">
										<img alt="Icon" src={BusinessImage} />
									</div>
									<div className="content">
										<div className="summary">
											<p className="user">Seller</p> {seller}
										</div>
									</div>
								</div>

								{isLOCAvailable && (
									<div className="event">
										<div className="label">
											<img alt="Icon" src={BankImage} />
										</div>
										<div className="content">
											<div className="summary">
												<p className="user">Advising Bank</p> {advisingBank}
											</div>
										</div>
									</div>
								)}

								{isLOCAvailable && (
									<div className="event">
										<div className="label">
											<img alt="Icon" src={BankImage} />
										</div>
										<div className="content">
											<div className="summary">
												<p className="user">Issuing Bank</p> {issuingBank}
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
						<div className="six wide column tx-status">
							<i className={`huge ${letterOfCreditStageIcons[txStatusNo]} icon`} />
							<p>{letterOfCreditStages[txStatusNo]}</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default TransactionListCard;
