import styled from "styled-components";

export const Input = styled.input`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;
export const Card = styled.form`
  text-align: left;
  padding: 35px;
  background-color: #fff;
  border-radius: 6px;
  margin-top: 30px;
  border: 1px solid #eee;
  animation-delay: 0.2s;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 5px #00000017;
  }
`;

export const Button = styled.button`
  background: ${(props) => (props.primary ? "transparent" : "white")};
  color: ${(props) => (props.primary ? "white" : "green")};
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  padding: 10px;
  text-transform: capitalize;
  transition: 0.2s;

  &:hover {
    background: ${(props) => (props.primary ? "white" : "#212529")};
    color: ${(props) => (props.primary ? "#3e7e3e" : "white")};
    border-color: ${(props) => (props.primary ? "white" : "#212529")};
  }
`;

export const ButtonHeader = styled.button`
  background: ${(props) => (props.primary ? "transparent" : "#3E7E3E")};
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  padding: 10px;
  text-transform: capitalize;
  transition: 0.2s;
  &:hover {
    background: ${(props) => (props.primary ? "white" : "#3E7E3E")};
    color: ${(props) => (props.primary ? "green" : "white")};
  }
`;

export const Title1 = styled.h1`
  color: #224722;
  margin: 20px;
`;
