import { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineThunderbolt } from "react-icons/ai";

const QuestionsandAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FaqItemDiv = styled.div`
  border: 1px solid #eee;
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

  .faq-answer{
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

const FaqSection = styled.section`
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

// const [FaqOpenStyle, setFaqOpenStyle] = useState()
class FaqAccordion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }



  handleClick(index) {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? -1 : index,
    }));
  }

  render() {
    const { faqItems } = this.props;
    const { activeIndex } = this.state;

    return (
      <QuestionsandAnswer className="col-12 accordion">
        {faqItems.map((item, index) => (
          <FaqItemDiv
            key={index}
            className={`faq-item ${index === activeIndex ? "active" : ""}`}
            onClick={() => this.handleClick(index)}
          >
            <FaqSection className="Faq-header">
              <div className="faq-question">
                <span className="index">0{index + 1}</span>
                <span className="question">{item.question}</span>
              </div>
              <div>
                {index === activeIndex ? (<AiOutlineThunderbolt style={{ color: " white " }} />): (<AiOutlinePlus style={{ color: " #081828 " }} />)}
              </div>
            </FaqSection>
            {index === activeIndex && (
              <FaqSection className="faq-answer">{item.answer}</FaqSection>
            )}
          </FaqItemDiv>
        ))}
      </QuestionsandAnswer>
      
    );
  }
}

export default FaqAccordion;
