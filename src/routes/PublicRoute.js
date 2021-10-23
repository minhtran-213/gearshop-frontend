import { Redirect, Route } from 'react-router';

import React from 'react';
import { Routes } from '../constants/routes';
import { connect } from 'react-redux';

const PublicRoute = ({ auth, ...rest }) => {
  const { isLoggedIn } = auth;
  if (!isLoggedIn) {
    return <Route {...rest} />;
  }
  return <Redirect to={Routes.HOME} />;
};

const mapStateToProp = (state) => {
  return state;
};
export default connect(mapStateToProp)(PublicRoute);
