import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const ContainerSignUp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 64%;
  padding: 10px 0;
`;

export const Employees = styled.img`
  width: 200px;
  height: 150px;
`;

export const Title = styled.h1`
  color: #000000;
  font-size: 30px;
  padding: 20px 0 0;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 276px;
  padding: 10px 0 0;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 20px;
`;

export const Label = styled.label`
  font-size: 13px;
  color: #808080;
  padding: 0 0 3px;
  font-weight: 500;
`;

export const Input = styled.input`
  height: 35px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  padding: 3px 0 5px 10px;
  color: #333333;

  &:focus {
    border-color: #4d22c9;
  }
`;

export const Submit = styled.button.attrs({ type: "submit" })`
  height: 35px;
  background: #4d22c9;
  border-radius: 5px;
  color: #f2f2f2;
  border: 0px;
  margin: 10px 0 0;
  cursor: pointer;

  &:active {
    opacity: 0.9;
  }
`;

export const TextAuth = styled.p`
  position: absolute;
  bottom: 10px;
  color: #333333;
  font-size: 13px;
`;

export const Link = styled(LinkRouter)`
  color: #4d22c9;
  &:visited {
    color: #4d22c9;
  }

  &:hover {
    color: #4d22c9;
  }
`;
