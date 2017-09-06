import React from 'react';

export default class Sort extends React.Component {
  render() {
    return (
      <div className="Control-group">
        <label className="Control-heading">Sort</label>
        <label className="Control-label" htmlFor="name">Name</label>
        <input className="Control" name="name" type="checkbox" />
        <label className="Control-label" htmlFor="subject">Subject</label>
        <input className="Control" name="subject" type="checkbox" />
      </div>
    );
  }
}