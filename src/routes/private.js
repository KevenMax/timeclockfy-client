import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Overview from "../pages/Overview";

const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      token ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const PrivateRoutes = () => (
  <Switch>
    <PrivateRoute exact path="/overview" component={Overview} />
  </Switch>
);

export default PrivateRoutes;
