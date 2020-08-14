import React from 'react';

export default function OtherPartyTaskScreen(props) {
	return (
		<div className="ui placeholder segment">
			<div className="ui icon header">
				<i className={`${props.icon} icon`} />
				{props.message}
			</div>
		</div>
	);
}
