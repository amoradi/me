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
    const isOpen = this.state.isOpen ? 'is-open': '';

    return (
      <div 
        className={`Hamburger ${isOpen}`}
        onClick={this.onToggle}
      >
        <div className="Hamburger-bar"></div>
        <div className="Hamburger-bar"></div>
      </div>
    );
  }
}

export default Hamburger;
