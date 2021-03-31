import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Divider, notification } from "antd";

import employees from "../../assets/employees.webp";

import Banner from "../../components/Banner";

import * as userService from "../../services/user";

import * as Styled from "./styles";

const SignUp = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      notification.warn({
        message: "Ops...",
        description:
          "Nome, email e senha precisam ser preenchidos para continuar.",
      });
    } else {
      const data = { name, email, password };
      const createAccount = await userService.create(data);

      if (createAccount) {
        history.push("/");
      }
    }
  };

  return (
    <Styled.Container>
      <Banner />
      <Styled.ContainerSignUp>
        <Styled.Employees src={employees} />

        <Styled.Title side="right">Crie sua conta</Styled.Title>

        <Divider style={{ width: "276px", minWidth: "276px" }} />

        <Styled.Form onSubmit={handleSubmit}>
          <Styled.Field>
            <Styled.Label>Nome</Styled.Label>
            <Styled.Input
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </Styled.Field>

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

          <Styled.Submit>Criar</Styled.Submit>
        </Styled.Form>

        <Styled.TextAuth>
          Já possui conta? <Styled.Link to="/">Entrar</Styled.Link>
        </Styled.TextAuth>
      </Styled.ContainerSignUp>
    </Styled.Container>
  );
};

export default SignUp;
