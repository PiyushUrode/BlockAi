import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is BlockAI and how does it work?",
      answer: "BlockAI is an innovative platform that combines blockchain technology and artificial intelligence to build transparent, secure, and scalable financial solutions — from DeFi tools and NFT platforms to fraud prevention and AI-powered creation tools."
    },
    {
      question: "How can I participate in the BlockAI Token Sale??",
      answer: "You can join the BlockAI Token Sale directly from the official dashboard. Simply connect your crypto wallet, select your preferred currency (ETH, BNB, or BASE), enter the amount, and complete your purchase securely."
    },
    {
      question: "What is the utility of the BAI token?",
      answer: "The BAI token powers the entire BlockAI ecosystem. It can be used for staking, governance voting, transaction fee discounts, yield farming, exclusive platform access, and more — ensuring both utility and long-term value."
    },
    {
      question: "Is the BlockAI network secure?",
      answer: "Yes. BlockAI employs multi-signature wallets, smart contract audits, and AI-driven fraud detection systems to ensure that every transaction is transparent, verifiable, and secure."
    },
    {
      question: "What’s next on the BlockAI roadmap?",
      answer: "BlockAI is continuously evolving — upcoming phases include AI creation tools, streaming platforms, NFT gaming ecosystems, e-commerce integration, and decentralized work marketplaces, expanding into a complete Web3 ecosystem by 2026."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-8 items-center py-5 md:py-10  px-5 max-w-7xl mx-auto">
      <h1 className="text-base md:text-2xl lg:text-5xl font-bold text-center text-gradient">
        Frequently Asked Questions
      </h1>
      <div className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-gradient-to-b from-[#111] to-[#000] rounded-3xl p-6 
              border border-gray-800 shadow-[0_0_20px_#7e22ce50] 
              hover:shadow-[0_0_30px_#ec489950] transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full text-left"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-lg md:text-xl font-semibold text-white">
                  {faq.question}
                </span>
              </div>
              <svg
                className={`w-6 h-6 text-purple-400 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300 text-base md:text-lg pl-9">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;