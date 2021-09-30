import styled from "styled-components";

export const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #fff;
  background: #000;
  ::placeholder {
    color: #fff;
  }
`;
export const Button = styled.button`
  color: #fff;
  background: #000;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 10px;
  :hover {
    transition: 0.3s;
    cursor: pointer;
    color: #000;
    background: #fff;
  }
`;
