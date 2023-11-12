import styled from "styled-components";

export const FAQ = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2% auto 2%;
`;

export const QuestionsandAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const FaqItemDiv = styled.div`
  border: 1px solid #eee;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
  cursor: pointer;
  .Faq-header {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    .index {
      position: absolute;
      height: 30px;
      width: 30px;
      color: #081828;
      line-height: 28px;
      text-align: center;
      border-radius: 50%;
      border: 1px solid #eee;
      background-color: white;
    }
    .question {
      font-size: 15px;
      font-weight: 600;
      padding-left: 45px;
      line-height: 25px;
      color: #081828;
    }
  }

  .faq-answer {
    color: #777;
    font-size: 15px;
    line-height: 24px;
    border-radius: 0 0 8px 8px;
    padding: 40px;
    background-color: #f9f9f9;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
`;

export const FaqSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
  align-items: center;
  height: 100%;
  
  div {
    display: flex;
    align-items: center;
  }
  .faq-question {
    height: 100%;
    display: flex;
    flex-direction: row;
    width: 90%;
    align-items: center;
    text-align: center;
  }
`;