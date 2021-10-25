import './App.css';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './components/page/Home';
import PrivateRoute from './routes/PrivateRoute';
import ProductDetail from './components/page/ProductDetail';
import PublicRoute from './routes/PublicRoute';
import Register from './components/page/Register';
import Signin from './components/page/Signin';

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
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          {publicRoute.map((route) => (
            <PublicRoute
              key={route.name}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
          {privateRoutes.map((route) => (
            <PrivateRoute
              key={route.name}
              exact
              sitr
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
