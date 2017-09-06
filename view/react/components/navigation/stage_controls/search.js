import React from 'react';

export default class Search extends React.Component {
  render() {
    return (
      <div className="Control-group">
        <label className="Control-heading" htmlFor="search">Search</label>
        <input className="Control" name="search" type="text" />
      </div>
    );
  }
}
