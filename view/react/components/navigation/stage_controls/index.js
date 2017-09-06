import React from 'react';
import Filter from './filter';
import Search from './search';
import Sort from './sort';

export default class StageControls extends React.Component {
  render() {
    return (
      <div className="StageControls"> 
        <Search />
        <Filter />
      </div>
    );
  }
}
