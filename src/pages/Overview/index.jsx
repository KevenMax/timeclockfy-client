import React, { useCallback, useEffect, useState } from "react";

import { notification } from "antd";

import Camera from "../../components/Camera";

import * as recordService from "../../services/record";

import getLocation from "../../utils/getLocation";

import * as Styled from "./styles";

const Overview = () => {
  const [buttonType, setButtonType] = useState("play");
  const [records, setRecords] = useState([]);

  useEffect(async () => {
    const listRecords = await recordService.getAllDay({});
    if (listRecords) {
      setRecords(listRecords);
    }
  }, []);

  useEffect(() => {
    setButtonType(records.length % 2 === 1 ? "stop" : "play");
  }, [records]);

  const fallbackHandlePicture = useCallback(async (picture) => {
    const location = getLocation();
    if (!picture || !location) {
      notification.warn({
        message: "Ops...",
        description: "Foto ou localização não foram detectadas.",
      });
    } else {
      const data = { location, picture };
      const record = await recordService.create(data);

      setRecords((oldRecords) => [...oldRecords, record]);
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
