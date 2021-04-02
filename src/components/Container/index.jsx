import React from "react";

import Sidebar from "../Sidebar";

import * as Styled from "./styles";

const Container = ({ children }) => (
  <Styled.Container>
    <Sidebar />
    {children}
  </Styled.Container>
);

export default Container;
