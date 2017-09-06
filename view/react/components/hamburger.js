import React from 'react';

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }

    this.onToggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div 
        className={`Hamburger ${this.state.isOpen ? 'is-open': ''}`}
        onClick={this.onToggle}
      >
        <div className="Hamburger-bar"></div>
        <div className="Hamburger-bar"></div>
      </div>
    );
  }
}

export default Hamburger;
