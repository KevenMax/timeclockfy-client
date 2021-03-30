import React from "react";

import PublicRoutes from "./public";
import PrivateRoutes from "./private";

const Routes = () => {
  return (
    <>
      <PublicRoutes />
      <PrivateRoutes />
    </>
  );
};

export default Routes;
