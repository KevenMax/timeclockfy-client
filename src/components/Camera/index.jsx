import React, { useRef, useCallback, useState, useEffect } from "react";
import Webcam from "react-webcam";

import { format } from "date-fns";
import pt from "date-fns/locale/pt";

import { Divider } from "antd";

import * as Styled from "./styles";

const videoConstraints = {
  width: 700,
  height: 500,
  facingMode: "user",
};

const Camera = ({ buttonType, fallbackHandlePicture }) => {
  const webcamRef = useRef(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeID);
    };
  }, []);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    fallbackHandlePicture(imageSrc);
  }, [webcamRef]);

  return (
    <Styled.ContainerWebcam>
      <Styled.ContentTitle>
        <Styled.Title>Registrar pontos diários</Styled.Title>

        <Styled.Info>
          {format(time, "dd 'de' MMMM 'de' yyyy HH:mm", { locale: pt })}
        </Styled.Info>
      </Styled.ContentTitle>

      <Divider style={Styled.Divider} />

      <Webcam
        audio={false}
        ref={webcamRef}
        videoConstraints={videoConstraints}
        screenshotFormat="image/jpeg"
        style={Styled.Webcam}
        mirrored
      />

      <Styled.Button onClick={capture}>
        <Styled.Icon icon={buttonType} />
      </Styled.Button>
    </Styled.ContainerWebcam>
  );
};

export default Camera;
