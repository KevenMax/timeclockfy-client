import React from "react";

import clock from "../../assets/clock.svg";

import * as Styled from "./styles";

const Banner = () => (
  <Styled.Container>
    <Styled.ContainerBrand>
      <Styled.Logo src={clock} />

      <Styled.Name>Timeclockfy</Styled.Name>
    </Styled.ContainerBrand>

    <Styled.Title>
      Gerencie com eficiência a jornada dos seus colaboradores
    </Styled.Title>

    <Styled.SubTitle>
      Através do timeclockfy é possível acompanhar e gerenciar o dia-a-dia de
      cada colaborador da sua empresa.
    </Styled.SubTitle>
  </Styled.Container>
);

export default Banner;
