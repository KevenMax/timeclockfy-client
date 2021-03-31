import React, { useState } from "react";

import { Divider, notification } from "antd";

import * as userService from "../../services/user";

import { useAuth } from "../../contexts/auth";

import clock from "../../assets/clock.svg";
import employees from "../../assets/employees.webp";

import * as Styled from "./styles";

const SignIn = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email && !password) {
      notification.warn({
        message: "Ops...",
        description: "Email e senha precisam ser preenchidos para continuar.",
      });
    } else {
      const data = { email, password };
      const auth = await userService.authentication(data);
      if (auth) {
        signIn(auth);
      }
    }
  };

  return (
    <Styled.Container>
      <Styled.ContainerLeft>
        <Styled.ContainerBrand>
          <Styled.Logo src={clock} />

          <Styled.Name>Timeclockfy</Styled.Name>
        </Styled.ContainerBrand>

        <Styled.Title side="left">
          Gerencia com eficiência a jornada dos seus colaboradores
        </Styled.Title>

        <Styled.SubTitle>
          Através do timeclockfy é possível acompanhar e gerenciar o dia-a-dia
          de cada colaborador da sua empresa.
        </Styled.SubTitle>
      </Styled.ContainerLeft>
      <Styled.ContainerRight>
        <Styled.Employees src={employees} />

        <Styled.Title side="right">Entrar</Styled.Title>

        <Divider style={{ width: "276px", minWidth: "276px" }} />

        <Styled.Form onSubmit={handleSubmit}>
          <Styled.Field>
            <Styled.Label>Email</Styled.Label>
            <Styled.Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Styled.Field>

          <Styled.Field>
            <Styled.Label>Senha</Styled.Label>
            <Styled.Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Styled.Field>

          <Styled.Submit>Entrar</Styled.Submit>
        </Styled.Form>

        <Styled.TextCreateUser>
          Não possui conta ainda? Crie sua{" "}
          <Styled.LinkNewUser>conta</Styled.LinkNewUser> hoje!
        </Styled.TextCreateUser>
      </Styled.ContainerRight>
    </Styled.Container>
  );
};

export default SignIn;
