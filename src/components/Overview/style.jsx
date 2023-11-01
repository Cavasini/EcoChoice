import styled from "styled-components";

export const Square = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  line-height: 60px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #3e7e3e;
  color: #fff;
  font-size: 20px;
  border-radius: 7px;
  -webkit-box-shadow: 0px 4px 6px #0000002a;
  box-shadow: 0px 4px 6px #0000002a;
  @media (max-width: 768px){
    height: 30px;
    width: 30px;
  }
`;

export const Button = styled.button`
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
    background: ${(props) => (props.primary ? "white" : "#212529")};
    color: ${(props) => (props.primary ? "#3E7E3E" : "white")};
  }

`;