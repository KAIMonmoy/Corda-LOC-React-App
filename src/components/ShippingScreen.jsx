import React from 'react';

import './ShippingScreen.css';
import Ship from '../images/ship.png';

export default function ShippingScreen() {
	return (
		<React.Fragment>
			<div className="shipping-wrapper">
				<img className="pirate" src={Ship} alt="Ship" />
				<div className="ocean">
					<div className="wave" />
					<div className="wave" />
				</div>
			</div>
		</React.Fragment>
	);
}
