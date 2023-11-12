import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  input {
    width: 60%;
    border: 0.5px solid #cecece;
    border-radius: 0.3rem;
    margin: 2px;
    padding: 3px;
  }
  span {
    color: red;
    font-size: 10pt;
  }
`;
export const ButtonSubmitDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:10px;
  padding: 5px;

  input{
    border: none;
    border-radius: 0.2rem;
    padding: 8px;
    width: 40%;
    background: #3e7e3e;
  color: white;

  &:hover {
    background: #212529;
    color: white;
  }
  }
`;
