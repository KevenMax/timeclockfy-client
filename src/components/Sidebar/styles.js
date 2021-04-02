import styled from "styled-components";

import { Link } from "react-router-dom";

import HomeIcon from "../../assets/home.svg";
import LogoutIcon from "../../assets/logout.svg";

export const Container = styled.div`
  width: 80px;
  min-height: 100vh;
  background: #4d22c9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
`;

export const ContainerBottom = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 2px;
`;

export const Item = styled(Link)`
  ${({ to, pathname }) =>
    to === pathname &&
    `background: #7551e1;
    border-radius: 5px;`};

  display: flex;
  justify-content: center;
  width: 70%;
  height: 50px;

  padding: 10px 0;

  &:hover {
    background: #7551e1;
    border-radius: 5px;
  }
`;

export const Home = styled.img.attrs({ src: HomeIcon })`
  width: 30px;
  height: 30px;
  opacity: 0.9;
`;

export const Logout = styled.img.attrs({ src: LogoutIcon })`
  width: 30px;
  height: 30px;
  opacity: 0.9;
`;
