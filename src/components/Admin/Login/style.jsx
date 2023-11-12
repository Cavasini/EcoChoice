import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  margin: 3%;
  div{
    color:white;
    display: flex;
    justify-content: start
  }
  input {
    width: 100%;
    background-color: #305830;
    border: 0.1px solid #cecece;
    border-radius: 0.3rem;
    margin: 2px;
    padding: 5px;
    color: white;
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
    border-radius: 0.5rem;
    padding: 5px;
    width: 100%;
    background: #3e7e3e;
  color: white;

  &:hover {
    background: #212529;
    color: white;
  }
  }
`;
