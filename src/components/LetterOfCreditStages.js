const letterOfCreditStages = [
	'Create Purchase Order',
	'Apply for Letter of Credit',
	'Approve Letter of Credit',
	'Letter of Credit Application Rejected',
	'Ship Products',
	'Pay Seller',
	'Pay Advising Bank',
	'Pay Issuing Bank',
	'Completed'
];

const letterOfCreditStageIcons = [
	'file alternate',
	'clipboard',
	'edit',
	'red window close',
	'ship',
	'dollar coin',
	'dollar coin',
	'dollar coin',
	'green check square'
];

const getTransactionStatus = (transaction) => {
	// APPLIED -> REJECTED
	// APPLIED -> ISSUED -> SHIPPED -> SELLER_PAID -> ADVISING_BANK_PAID -> ISSUING_BANK_PAID
	if (transaction.length === 0) return letterOfCreditStages[0];
	if (transaction[1] === null) return letterOfCreditStages[1];
	const locStatus = transaction[1]['state']['data']['locStatus'];
	if (locStatus === 'APPLIED') return letterOfCreditStages[2];
	if (locStatus === 'REJECTED') return letterOfCreditStages[3];
	if (locStatus === 'ISSUED') return letterOfCreditStages[4];
	if (locStatus === 'SHIPPED') return letterOfCreditStages[5];
	if (locStatus === 'SELLER_PAID') return letterOfCreditStages[6];
	if (locStatus === 'ADVISING_BANK_PAID') return letterOfCreditStages[7];
	if (locStatus === 'ISSUING_BANK_PAID') return letterOfCreditStages[8];
};

export { letterOfCreditStages, getTransactionStatus, letterOfCreditStageIcons };
