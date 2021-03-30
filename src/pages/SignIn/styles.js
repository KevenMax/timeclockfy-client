import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const ContainerLeft = styled.div`
  width: 36%;
  background: #4d22c9;
  padding: 190px 0 0 80px;
`;

export const ContainerBrand = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const Name = styled.h3`
  margin: 13px 0 0 10px;
  font-weight: 500;
  color: #ffffff;
`;

export const Title = styled.h1`
  ${({ side }) =>
    side === "left"
      ? `
      color: #ffffff; 
      font-size: 24px;
      padding: 50px 80px 30px 0;
    `
      : `
      color: #000000; 
      font-size: 30px;
      padding: 50px 0 10px;
    `}

  font-weight: 500;
`;

export const SubTitle = styled.h4`
  color: #ffffff;
  opacity: 0.5;
  padding: 40px 80px 40px 0;
  font-weight: 400;
`;

export const ContainerRight = styled.div`
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

export const TextCreateUser = styled.p`
  position: absolute;
  bottom: 10px;
  color: #333333;
  font-size: 13px;
`;

export const LinkNewUser = styled.a`
  color: #4d22c9;
  &:visited {
    color: #4d22c9;
  }

  &:hover {
    color: #4d22c9;
  }
`;
