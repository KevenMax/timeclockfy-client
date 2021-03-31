import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { useAuth } from "../contexts/auth";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const PublicRoute = ({
  component: Component,
  isCustomRoute,
  render,
  ...rest
}) => {
  const { signed } = useAuth();

  if (isCustomRoute) {
    return <Route {...rest} render={render} />;
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        return signed ? <Redirect to="/overview" /> : <Component {...props} />;
      }}
    />
  );
};

const PublicRoutes = () => (
  <Switch>
    <PublicRoute exact path="/" component={SignIn} />
    <PublicRoute exact path="/auth/new" component={SignUp} />
  </Switch>
);

export default PublicRoutes;
