import React from 'react';

export default class App extends React.Component {
	render() {
		const { navigation, stage } = this.props;

		return (
			<div className="Domain">
				{navigation}
				<section className="Stage">{stage}</section>
			</div>
		);
	}
}
