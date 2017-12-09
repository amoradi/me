import React from 'react';
import CreateNote from './create_note';
import DeleteNote from './delete_note';
import EditNote from './edit_note';
import SignOut from './sign_out';

export default class LoggedInControls extends React.Component {
	render() {
		return (
			<ul className="LoggedInControls">
				<li><CreateNote /></li>
				<li><SignOut /></li>
			</ul>
		);
	}
}
