import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import SignIn from "../pages/SignIn";

const PublicRoute = ({
  component: Component,
  token,
  isCustomRoute,
  render,
  ...rest
}) => {
  if (isCustomRoute) {
    return <Route {...rest} render={render} />;
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? <Redirect to="/overview" /> : <Component {...props} />;
      }}
    />
  );
};

const PublicRoutes = () => (
  <Switch>
    <PublicRoute exact path="/" component={SignIn} />
  </Switch>
);

export default PublicRoutes;
