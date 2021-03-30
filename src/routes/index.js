import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PublicRoutes from "./public";
import PrivateRoutes from "./private";

const Routes = () => {
  return (
    <Router>
      <PublicRoutes />
      <PrivateRoutes />
    </Router>
  );
};

export default Routes;
