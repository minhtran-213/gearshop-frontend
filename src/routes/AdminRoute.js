import { Redirect, Route } from 'react-router';

import AdminHome from '../components/page/AdminHome';
import React from 'react';
import { Routes } from '../constants/routes';
import { connect } from 'react-redux';

const AdminRoute = ({ component, auth, ...rest }) => {
  const { isLoggedIn } = auth;
  if (isLoggedIn) {
    return <Route {...rest} component={component} />;
  }
  return <Redirect to={Routes.SIGN_IN} />;
};

const mapStateToProp = (state) => {
  return state;
};
export default connect(mapStateToProp)(AdminRoute);
