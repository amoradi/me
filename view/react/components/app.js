import React from 'react';

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
