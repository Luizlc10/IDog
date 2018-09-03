import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './auth';

import LoginPage from './pages/login';

const PrivateRoute = ({ component: Component, props }) => (
  <Route
    {...props}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ LoginPage } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
