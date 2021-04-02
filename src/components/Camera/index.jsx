import React, { useRef, useCallback } from "react";
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

const Camera = ({ buttonIcon, fallbackSubmit }) => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <Styled.ContainerWebcam>
      <Styled.ContentTitle>
        <Styled.Title>Registrar pontos diários</Styled.Title>
        <Styled.Info>
          {format(new Date(), "dd 'de' MMMM 'de' yyyy", { locale: pt })}
        </Styled.Info>
      </Styled.ContentTitle>
      <Divider style={Styled.Divider} />
      <Webcam
        audio={false}
        ref={webcamRef}
        videoConstraints={videoConstraints}
        screenshotFormat="image/jpeg"
        style={Styled.Webcam}
      />
      <Styled.Button>
        <Styled.Icon icon={buttonIcon} />
      </Styled.Button>
    </Styled.ContainerWebcam>
  );
};

export default Camera;
