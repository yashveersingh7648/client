"use client"
import { useState } from 'react';
import Head from 'next/head';

import WhatsAppButton from "@/app/components/WhatsAppButton"


const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="mb-4 border-b border-gray-200 pb-4 " data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-medium text-gray-900 hover:text-blue-600 focus:outline-none"
      >
        <span className="text-lg md:text-xl">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`mt-2 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="prose prose-sm text-gray-500" dangerouslySetInnerHTML={{ __html: answer }} />
      </div>
    </li>
  );
};

const FAQSection = ({ title, faqs }) => {
  return (
    
    <div className="mb-16 ">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">{title}</h2>
      <ul className="space-y-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
        ))}
      </ul>
    </div>
  );
};

const Breadcrumb = () => {
  return (
    <section 
      className="relative h-64 w-full overflow-hidden bg-cover bg-center h-100  top-20 mb-20"
      style={{ backgroundImage: "url('/Images/faq.jpg')" }}
    >
      <div className="absolute inset-0  opacity-30 "></div>
      {/* <div className="container relative z-10 flex h-full flex-col justify-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl text-center ms-10">Frequently Asked Questions</h1>
        <nav className="flex text-sm md:text-base" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="https://www.tmtplus.co.in" className="hover:text-orange-400 text-1xl font-bold md:text-1xl text-center ps-130 pt-5" >Home</a>
            </li>
            <li>/</li>
            <li aria-current="page" className='text-1xl font-bold md:text-1xl text-center'>Frequently Asked Questions</li>
          </ol>
        </nav>
      </div> */}
    </section>
  );
};

const FAQPage = () => {
  // Reusable FAQ data
  const upvcFaqs = [
    {
      question: "How do uPVC pipes act at freezing temperatures?",
      answer: "The durability of uPVC pipes is unaffected by extreme temperatures or changes in the weather. Due to their ease of use and installation, TMT PLUS <a href='https://www.tmtplus.co.in/upvc-pipes-and-fittings/' target='_blank' rel='noopener' class='text-blue-600 hover:underline'>uPVC pipes</a> have also proven to be effective in harsh environments."
    },
    {
      question: "How long is the uPVC pipe expected to last?",
      answer: "TMT Plus uPVC pipes are known for their uncommon unwavering quality. uPVC pipes can last for decades when installed correctly. The assessed life expectancy of uPVC pipes is 50 years."
    },
    // Add more uPVC FAQs here...
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
    // Add more Water Tank FAQs here...
  ];

  return (
    <>
      <Head>
        <title>FAQ | TMT Plus</title>
        <meta name="description" content="Frequently asked questions about TMT Plus products" />
      </Head>

      <Breadcrumb />

      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <FAQSection title="uPVC PIPES" faqs={upvcFaqs} />
          <FAQSection title="WATER TANK" faqs={waterTankFaqs} />
        </div>
      </section>
      <WhatsAppButton />
      
    </>
  );
};

export default FAQPage;