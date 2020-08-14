import React from 'react';

import { letterOfCreditStages, letterOfCreditStageIcons } from './LetterOfCreditStages';

function TransactionStep({ stepState, stepTitle, stepIcon }) {
	return (
		<div className={`${stepState} step`}>
			<i className={`${stepIcon} icon`} />
			<div className="content">
				<div className="title">{stepTitle}</div>
			</div>
		</div>
	);
}

export default function TransactionSteps(props) {
	const txStatus = props.txStatus;
	const txStatusNo = letterOfCreditStages.indexOf(txStatus);
	return (
		<div className="ui vertical steps">
			{letterOfCreditStages.map((stage, index) => {
				if (
					(txStatusNo <= 2 && index === 3) ||
					(txStatusNo > 3 && index === 3) ||
					(txStatusNo < 8 && index === 8) ||
					(txStatusNo === 3 && index === 2)
				)
					return null;
				let stepState;
				if (index < txStatusNo) stepState = 'completed';
				else if (index == txStatusNo) stepState = 'active';
				else stepState = 'disabled';
				return (
					<TransactionStep
						key={stage}
						stepState={stepState}
						stepTitle={stage}
						stepIcon={letterOfCreditStageIcons[index]}
					/>
				);
			})}
		</div>
	);
}
