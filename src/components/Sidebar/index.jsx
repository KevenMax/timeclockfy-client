import React from "react";
import { useHistory } from "react-router-dom";

import { Divider } from "antd";

import { useAuth } from "../../contexts/auth";

import * as Styled from "./styles";

const Sidebar = () => {
  const history = useHistory();
  const { signOut } = useAuth();

  const logout = () => {
    signOut();
    history.replace("/");
  };

  return (
    <Styled.Container>
      <Styled.ContainerTop>
        <Styled.Item to="/overview" pathname={history?.location?.pathname}>
          <Styled.Home />
        </Styled.Item>
      </Styled.ContainerTop>

      <Styled.ContainerBottom>
        <Divider style={{ backgroundColor: "#cccccc" }} />
        <Styled.Item
          to="/"
          pathname={history?.location?.pathname}
          onClick={() => logout()}
        >
          <Styled.Logout />
        </Styled.Item>
      </Styled.ContainerBottom>
    </Styled.Container>
  );
};

export default Sidebar;
