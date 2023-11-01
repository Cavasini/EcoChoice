import { Component } from "react";
import { AiOutlineBulb, AiOutlineCaretUp } from "react-icons/ai";
import { FaqSection, QuestionsandAnswer, FaqItemDiv } from "./style";



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
                {index === activeIndex ? (
                  <AiOutlineCaretUp style={{ color: " white " }} />
                ) : (
                  <AiOutlineBulb style={{ color: " #081828 " }} />
                )}
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
