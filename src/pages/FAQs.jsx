import React, { useState } from "react";
import "../styles/FAQs.css"; // ✅ Make sure path is correct

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Where are you based and how far can you travel?",
      answer: "We are based in India and are available to travel globally for our projects.",
    },
    {
      question: "How can we book you?",
      answer: "You can book us by contacting us via email at hello@ivoryfilms.in or using the contact page.",
    },
    {
      question: "What are your deliverables?",
      answer: "Our deliverables include high-quality films, photographs, and edited content tailored to your needs.",
    },
    {
      question: "How much do you charge and what are the payment terms?",
      answer: "Our pricing depends on the project scope. Typically, we require a 50% advance payment and 50% upon completion.",
    },
    {
      question: "What are the delivery timelines?",
      answer: "The usual delivery time is 4–6 weeks after the event or shoot.",
    },
    {
      question: "How do you guys work?",
      answer: "We collaborate closely with our clients to understand their vision and execute it artistically.",
    },
  ];

  return (
    <div className="faq-section">
      <div className="container faq-header">
        <h1>We’re here to answer all your questions</h1>
        <p>
          We try to answer all your questions here. If you have any further questions about IVORY FILMS you can always contact us at{" "}
          <strong>hello@ivoryfilms.in</strong>. We will respond to your inquiry as soon as possible.
        </p>
      </div>

      <div className="container faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <h5>{faq.question}</h5>
              <span className={`faq-toggle ${activeIndex === index ? "active" : ""}`}>+</span>
            </div>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default FAQs;
