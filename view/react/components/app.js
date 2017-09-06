import React from 'react';
// import Navigation from './navigation/index';
// import Stage from './stage/index';

export default class App extends React.Component {
  render() {
    return (
      <div className="Domain">
        {this.props.navigation}
        <section className="Stage">{this.props.stage}</section>
      </div>
    );
  }
}
