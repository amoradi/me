import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signIn } from '../actions';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.onHandleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    console.log('submit');
    evt.preventDefault();

    this.props.signIn({
      username: this.refs.username.value,
      password: this.refs.password.value
    }, () => {
      this.props.history.push('/notes/');
    });
  }

  render() {
    return (
      <div className="SignIn">
        <form className="Form AddNewNote" onSubmit={this.onHandleSubmit}>
          <div className="Form-group">
            <label className="Form-label">Username</label>
            <input
              ref="username"
              className="Form-control"
              type="text"
              name="username"
            />
          </div>
          <div className="Form-group">
            <label className="Form-label">Password</label>
            <input
              ref="password"
              className="Form-control"
              type="text"
              name="password"
            />
          </div>
          <input type="submit" className="Form-button" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default connect(null, { signIn })(SignIn);
