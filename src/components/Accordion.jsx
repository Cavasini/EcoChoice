import React, { Component } from "react";
import styled from "styled-components";

const QuestionsandAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FaqItemDiv = styled.div`
border: 1px solid green;
  display: flex;
  width: 50%;
`




class FaqAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
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
      <QuestionsandAnswer>
        {faqItems.map((item, index) => (
          <FaqItemDiv key={index} className="faq-item">
            <div
              className={`faq-question ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => this.handleClick(index)}
            >
              {item.question}{faqItems.indexOf(item)+1}
            </div>
            {index === activeIndex && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </FaqItemDiv>
        ))}
      </QuestionsandAnswer>
    );
  }
}

export default FaqAccordion;
