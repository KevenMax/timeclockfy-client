import styled from "styled-components";

import playIcon from "../../assets/play.svg";
import stopIcon from "../../assets/stop.svg";

export const ContainerWebcam = styled.div`
  padding: 30px 0 0 40px;
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  color: #4d22c9;
`;

export const Info = styled.p`
  margin: 0 0 10px;
  color: #4d22c9;
`;

export const Divider = {
  margin: "10px 0 50px 0",
  padding: 0,
};

export const Webcam = {
  border: "1px solid #fff",
  borderRadius: "10px",
};

export const Button = styled.div`
  position: relative;
  background: #4d22c9;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: -60px 0 0 300px;

  &:active {
    background: #7551e1;
  }
`;

export const Icon = styled.img.attrs(({ icon }) => ({
  src: icon === "play" ? playIcon : stopIcon,
}))`
  margin-left: ${({ icon }) => (icon === "play" ? "4px" : "0px")};
  width: 20px;
  height: 20px;
`;
