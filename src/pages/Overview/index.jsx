import React, { useCallback, useEffect, useState } from "react";

import { notification } from "antd";

import Camera from "../../components/Camera";

import * as recordService from "../../services/record";

import getLocation from "../../utils/getLocation";

import * as Styled from "./styles";

const Overview = () => {
  const [buttonType, setButtonType] = useState("play");

  const fallbackHandlePicture = useCallback(async (picture) => {
    const location = getLocation();
    if (!picture || !location) {
      notification.warn({
        message: "Ops...",
        description: "Foto ou localização não foram detectadas.",
      });
    } else {
      const data = { location, picture };
      await recordService.create(data);
    }
  }, []);

  return (
    <Styled.ContainerOverview>
      <Styled.ContainerWebcam>
        <Camera
          buttonType={buttonType}
          fallbackHandlePicture={fallbackHandlePicture}
        />
      </Styled.ContainerWebcam>
      <Styled.InfoWebcam></Styled.InfoWebcam>
    </Styled.ContainerOverview>
  );
};

export default Overview;
