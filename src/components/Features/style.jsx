import styled from "styled-components";

export const Card = styled.form`
  text-align: left;
  padding: 35px;
  background-color: #fff;
  border-radius: 6px;
  margin-top: 30px;
  border: 1px solid #eee;
  animation-delay: 0.2s;
  height:270px;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 5px #00000017;
  }
`;

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