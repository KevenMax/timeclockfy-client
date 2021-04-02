import React from "react";

import Camera from "../../components/Camera";

import * as Styled from "./styles";

const Overview = () => {
  return (
    <Styled.ContainerOverview>
      <Styled.ContainerWebcam>
        <Camera buttonIcon="play" />
      </Styled.ContainerWebcam>
      <Styled.InfoWebcam></Styled.InfoWebcam>
    </Styled.ContainerOverview>
  );
};

export default Overview;
