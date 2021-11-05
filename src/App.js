import './App.css';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AdminHome from './components/page/AdminHome';
import AdminRoute from './routes/AdminRoute';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './components/page/Home';
import PrivateRoute from './routes/PrivateRoute';
import ProductDetail from './components/page/ProductDetail';
import PublicRoute from './routes/PublicRoute';
import Register from './components/page/Register';
import Signin from './components/page/Signin';
import { connect } from 'react-redux';

export const privateRoutes = [
  {
    path: '/',
    name: 'homepage',
    component: Home,
  },
  {
    path: `/productDetail/:id`,
    name: 'productDetail',
    component: ProductDetail,
  },
];
export const publicRoute = [
  {
    path: '/signin',
    name: 'signin',
    component: Signin,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
];

export const adminRoute = [
  {
    path: '/admin',
    name: 'admin_home',
    component: AdminHome,
  },
];
const App = ({ auth }) => {
  // const { roles } = auth;
  // console.log(auth);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          {publicRoute.map((route) => (
            <PublicRoute
              key={route.name}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
          {auth.roles.includes('ROLE_ADMIN')
            ? adminRoute.map((route) => (
                <AdminRoute
                  key={route.name}
                  exact
                  path={route.path}
                  component={route.component}
                />
              ))
            : privateRoutes.map((route) => (
                <PrivateRoute
                  key={route.name}
                  exact
                  path={route.path}
                  component={route.component}
                />
              ))}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
const mapStateToProp = (state) => {
  return state;
};
export default connect(mapStateToProp)(App);
