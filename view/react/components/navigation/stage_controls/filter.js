import React from 'react';

export default class Filter extends React.Component {
  render() {
    return (
      <div className="Control-group">
        <label className="Control-heading" htmlFor="filter">Filter</label>
        <select className="Control-selection" name="filter">
          <option value="JavaScript">JavaScript</option>
          <option value="Computer Science">Computer Science</option>
          <option value="color">Color</option>
          <option value="UX">UX</option>
        </select>
      </div>
    );
  }
}
