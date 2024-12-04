import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string | string[];
}

const faqs: FaqItem[] = [
  {
    question: "What is the Profitability Index (PI)?",
    answer: "The Profitability Index (PI) is a financial metric that measures the ratio of the present value of future cash flows to the initial investment. A PI greater than 1 indicates that the investment is expected to be profitable, while a PI less than 1 suggests the investment may result in a loss."
  },
  {
    question: "How is Profitability Index calculated?",
    answer: [
      "The Profitability Index is calculated using the following steps:",
      "• Calculate the present value of future cash flows",
      "• Divide by the initial investment amount",
      "• PI = Present Value of Future Cash Flows / Initial Investment",
      "• A PI > 1 indicates a potentially profitable investment"
    ]
  },
  {
    question: "Why use Profitability Index for investment decisions?",
    answer: "Profitability Index is valuable for investment decisions because it considers the time value of money, provides a standardized comparison between different investment opportunities, and helps in ranking projects when capital is limited. It's particularly useful when comparing projects of different sizes."
  },
  {
    question: "What are the limitations of Profitability Index?",
    answer: "While useful, PI has some limitations: it doesn't consider the absolute size of the investment, may not account for all risks, and assumes cash flows are certain. It's best used alongside other metrics like NPV and IRR for comprehensive investment analysis."
  }
];

export default function FaqSection() {
  return (
    <div className="bg-gray-50 rounded-xl p-8 mt-12">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="h-8 w-8 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
            {Array.isArray(faq.answer) ? (
              <ul className="space-y-2 text-gray-600">
                {faq.answer.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}