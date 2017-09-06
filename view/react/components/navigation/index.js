import React from 'react';
import StageControls from './stage_controls';
import LoggedInControls from './logged_in_controls';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
            <Link className="Menu-link" to="/">info</Link>
          </li>
          {
          // <li className="Menu-item">
          //   <Link className="Menu-link" to="/info">info</Link>
          // </li>
          }
          <li className="Menu-item">
            <Link className="Menu-link" to="/notes">notes</Link>
          </li>
          {
          // <li className="Menu-item">
          //   <Link className="Menu-link" to="/artifacts">artifacts</Link>
          // </li>
          }
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

