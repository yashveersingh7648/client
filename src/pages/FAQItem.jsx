import { useState } from 'react';
import { Helmet } from 'react-helmet';
import WhatsAppButton from "../components/WhatsAppButton"

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="faq-item" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="faq-question"
      >
        <span className="faq-question-text">{question}</span>
        <span className={`faq-icon ${isOpen ? 'open' : ''}`}>
          <svg className="faq-svg" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`faq-answer ${isOpen ? 'open' : ''}`}
      >
        <div className="faq-answer-content" dangerouslySetInnerHTML={{ __html: answer }} />
      </div>
    </li>
  );
};

const FAQSection = ({ title, faqs }) => {
  return (
    <div className="faq-section">
      <h2 className="faq-section-title">{title}</h2>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
        ))}
      </ul>
    </div>
  );
};

const Breadcrumb = () => {
  return (
    <section className="breadcrumb-section3">
      <div className="breadcrumb-overlay"></div>
    </section>
  );
};

const FAQPage = () => {
  const upvcFaqs = [
    {
      question: "How do uPVC pipes act at freezing temperatures?",
      answer: "The durability of uPVC pipes is unaffected by extreme temperatures or changes in the weather. Due to their ease of use and installation, TMT PLUS <a href='https://www.tmtplus.co.in/upvc-pipes-and-fittings/' target='_blank' rel='noopener' class='faq-link'>uPVC pipes</a> have also proven to be effective in harsh environments."
    },
    {
      question: "How long is the uPVC pipe expected to last?",
      answer: "TMT Plus uPVC pipes are known for their uncommon unwavering quality. uPVC pipes can last for decades when installed correctly. The assessed life expectancy of uPVC pipes is 50 years."
    },
  ];

  const waterTankFaqs = [
    {
      question: "How will I determine which size I need?",
      answer: "There are a few factors that will assist you with settling on the size of the tank. The tank's intended use and the number of people using it are these factors; domestic or commercial. If you are going to use it for domestic purposes, a 500-1000 liter tank will most probably be enough. If it's for commercial purpose, then you will need a much bigger tank."
    },
    {
      question: "Is The Installation Process Too Complicated?",
      answer: "The answer is no. Because plastic water storage tanks are so light, installing them doesn't require a lot of labor. Obviously, if you want to install it anywhere you want, you'll need help from a professional. In most cases, the company you are buying from provides the installation services too."
    },
  ];

  return (
    <>
      <Helmet>
        <title>FAQ | TMT Plus</title>
        <meta name="description" content="Frequently asked questions about TMT Plus products" />
      </Helmet>

      <Breadcrumb />

      <section className="faq-main-section">
        <div className="faq-container">
          <FAQSection title="uPVC PIPES" faqs={upvcFaqs} />
          <FAQSection title="WATER TANK" faqs={waterTankFaqs} />
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
};

export default FAQPage;