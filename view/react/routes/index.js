import React from 'react';
import { Router, Switch } from 'react-router-dom';

import DefaultLayout from '../layouts/default';
import Home from '../pages/home';
import Reports from '../pages/reports';
import GetStarted from '../pages/onboarding/company_owner/get_started';
import SetUp from '../pages/onboarding/company_owner/set_up';
import InviteTeam from '../pages/onboarding/company_owner/invite_team';
import OnboardingDone from '../pages/onboarding/company_owner/complete';
import SignUp from '../pages/onboarding/team_member/sign_up';
import SignIn from '../pages/sign_in';
import CreateAccount from '../pages/onboarding/team_member/create_account';
import SelectLeader from '../pages/onboarding/team_member/select_leader';
import * as path from '../paths';
import history from '../history';

export default () =>
  (<Router history={history}>
    <Switch>
      <DefaultLayout exact path={path.HOME} component={Home} />
      <DefaultLayout path={path.REPORTS} component={Reports} />
      <DefaultLayout path={path.GET_STARTED} component={GetStarted} />
      <DefaultLayout path={path.SET_UP} component={SetUp} />
      <DefaultLayout path={path.INVITE_TEAM} component={InviteTeam} />
      <DefaultLayout path={path.ONBOARDING_DONE} component={OnboardingDone} />
      <DefaultLayout path={`${path.SIGN_UP}/:companyId`} component={SignUp} isLoggedOut={true} />
      <DefaultLayout path={path.CREATE_ACCOUNT} component={CreateAccount} isLoggedOut={true} />
      <DefaultLayout path={path.SELECT_LEADER} component={SelectLeader} isLoggedOut={true} />
      <DefaultLayout path={path.SIGN_IN} component={SignIn} isLoggedOut={true} />
    </Switch>
  </Router>)
;
