import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { HOME, NOTES, ARTIFACTS, INFO } from '../../constants';
import Hamburger from '../hamburger';
import Menu from '../menu';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showSignOut: true };
  }

  render() {
    return (
      <Menu>
        <ul className="Menu-list">
          <li className="Menu-item">
            <Link className="Menu-link" to={HOME}>home</Link>
          </li>
          <li className="Menu-item">
            <Link className="Menu-link" to={NOTES}>notes</Link>
          </li>
          <li className="Menu-item">
            <Link className="Menu-link" to={ARTIFACTS}>artifacts</Link>
          </li>
          <li className="Menu-item">
            <Link className="Menu-link" to={INFO}>info</Link>
          </li>
        </ul>
      </Menu>
    );
  }
}

function mapStateToProps({ isSignedIn }) {
  return {
    isSignedIn
  };
}

export default connect(mapStateToProps)(Navigation);

