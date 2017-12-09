import React from 'react';
import { Link } from 'react-router-dom';

export default class CreateNote extends React.Component {
	render() {
		return (
			<Link className="Control-heading" to="/notes/new">create note</Link>
		);
	}
}
