import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import StageWrapper from '../components/stage_wrapper';
import StageWrapperLeftSidebar from '../components/stage_wrapper_left_sidebar';
import NavigationTop from '../containers/navigation_top';
import NavigationSide from '../containers/navigation_side';
import Stage from '../components/stage';

const Layout = ({ component: Component, ...rest }) => {
  const { isAaUser } = rest.profile;
  const { isLoggedOut } = rest;
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className={`Domain ${isLoggedOut ? 'is-loggedOut': ''}`}>
          {!isLoggedOut && <NavigationTop />}
          {isAaUser && <NavigationSide />}
          {isAaUser ? (
            <StageWrapperLeftSidebar>
              <Stage>
                <Component {...matchProps} />
              </Stage>
            </StageWrapperLeftSidebar>
          ) : (
            <StageWrapper>
              <Stage>
                <Component {...matchProps} />
              </Stage>
            </StageWrapper>
          )}
        </div>
      )}
    />
  );
};

function mapStateToProps({ profile }) {
  return {
    profile,
  };
}

export default connect(mapStateToProps)(Layout);

Layout.propTypes = {
  component: PropTypes.func.isRequired,
};
