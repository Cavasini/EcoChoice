import styled from "styled-components";


export const Button = styled.button`
  background: ${(props) => (props.primary ? "transparent" : "white")};
  color: ${(props) => (props.primary ? "white" : "#3e7e3e")};
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