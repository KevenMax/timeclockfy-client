import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { useAuth } from "../contexts/auth";

import Container from "../components/Container";

import Overview from "../pages/Overview";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { signed } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        signed ? (
          <Container>
            <Component {...props} />
          </Container>
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const PrivateRoutes = () => (
  <Switch>
    <PrivateRoute exact path="/overview" component={Overview} />
  </Switch>
);

export default PrivateRoutes;
