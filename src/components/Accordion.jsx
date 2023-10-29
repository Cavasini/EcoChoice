import React, { Component } from 'react';

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
      <div className="faq-accordion">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${index === activeIndex ? 'active' : ''}`}
              onClick={() => this.handleClick(index)}
            >
              {item.question}
            </div>
            {index === activeIndex && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default FaqAccordion;