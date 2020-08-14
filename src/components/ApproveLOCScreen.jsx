import React, { Component } from 'react';

export default class ApproveLOCScreen extends Component {
	handleOnAccept = (event) => {
		event.preventDefault();

		const baseURL = `http://${window.location.host}/api/example`;

		this.props.toggleLoadingState();

		const requestJSON = JSON.stringify({
			locId: this.props.loc['state']['data']['locId'],
			locStatus: 'ISSUED'
		});
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: requestJSON
		};
		fetch(`${baseURL}/approve-loc`, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				this.props.handleOnApproveLOC({
					state: {
						data: result['letter_of_credit']
					}
				});
				this.props.toggleLoadingState();
			})
			.catch((err) => {
				console.error(err);
			});
	};

	handleOnReject = (event) => {
		event.preventDefault();

		const baseURL = `http://${window.location.host}/api/example`;

		this.props.toggleLoadingState();

		const requestJSON = JSON.stringify({
			locId: this.props.loc['state']['data']['locId'],
			locStatus: 'REJECTED'
		});
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: requestJSON
		};
		fetch(`${baseURL}/approve-loc`, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				this.props.handleOnApproveLOC({
					state: {
						data: result['letter_of_credit']
					}
				});
				this.props.toggleLoadingState();
			})
			.catch((err) => {
				console.error(err);
			});
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
