import React from 'react';
import { Calculator, TrendingUp, DollarSign, BarChart3 } from 'lucide-react';
import FeatureCard from './FeatureCard';
import FaqSection from './FaqSection';

export default function SeoContent() {
  const features = [
    {
      icon: Calculator,
      title: "Profitability Analysis",
      description: "Calculate the Profitability Index (PI) to evaluate investment opportunities with precision."
    },
    {
      icon: TrendingUp,
      title: "Investment Metrics",
      description: "Get comprehensive metrics including NPV, IRR, and payback period for better decision making."
    },
    {
      icon: DollarSign,
      title: "Cash Flow Analysis",
      description: "Input and analyze multiple years of cash flows to determine investment viability."
    },
    {
      icon: BarChart3,
      title: "Investment Comparison",
      description: "Compare different investment opportunities using standardized profitability metrics."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Profitability Index</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our Profitability Index calculator helps investors evaluate and compare investment opportunities by analyzing the ratio of present value of future cash flows to initial investment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-4">Benefits of Profitability Index Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Investment Decision Making</h4>
            <ul className="space-y-2">
              <li>• Evaluate investment viability</li>
              <li>• Compare multiple projects</li>
              <li>• Assess risk-adjusted returns</li>
              <li>• Optimize resource allocation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Comprehensive Analysis</h4>
            <ul className="space-y-2">
              <li>• Time value of money consideration</li>
              <li>• Multiple period analysis</li>
              <li>• Risk assessment tools</li>
              <li>• Clear decision metrics</li>
            </ul>
          </div>
        </div>
      </div>

      <FaqSection />
    </div>
  );
}