import { Component } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

const QuestionsandAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FaqItemDiv = styled.div`
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const FaqSection = styled.section`
  display: flex;
  flex-direction: row;
`;

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
      <QuestionsandAnswer className="col-12">
        {faqItems.map((item, index) => (
          <FaqItemDiv
            key={index}
            className={`faq-item ${index === activeIndex ? "active" : ""}`}
            onClick={() => this.handleClick(index)}
          >
            <FaqSection>
              <div>{faqItems.indexOf(item) + 1}</div>
              <div className="faq-question">
                <h6>{item.question}</h6>
              </div>
              <div>
                <AiOutlinePlus style={{ color: " black " }} />
              </div>
            </FaqSection>
            {index === activeIndex && (
              <FaqSection className="faq-answer bg-gray">
                {item.answer}
              </FaqSection>
            )}
          </FaqItemDiv>
        ))}
      </QuestionsandAnswer>
    );
  }
}

export default FaqAccordion;
