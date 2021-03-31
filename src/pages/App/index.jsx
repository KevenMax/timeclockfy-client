import React from "react";

import Routes from "../../routes";
import GlobalStyles from "../../styles";
import "antd/dist/antd.css";
import { AuthProvider } from "../../contexts/auth";

const App = () => {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyles />
    </AuthProvider>
  );
};

export default App;
