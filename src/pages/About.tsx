import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
          
          <div className="prose prose-indigo max-w-none">
            <p className="text-lg">Welcome to Profitability Index Calculator, your comprehensive resource for investment analysis and decision-making tools.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p>We aim to provide accurate, easy-to-use financial tools that help investors and financial professionals evaluate investment opportunities through detailed profitability analysis.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Specialized in investment analysis calculations</li>
              <li>Comprehensive profitability metrics</li>
              <li>User-friendly interface</li>
              <li>Advanced comparison tools</li>
              <li>Educational resources about investment analysis</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Expertise</h2>
            <p>Our team consists of financial analysts and investment professionals who understand the complexities of investment evaluation. We stay current with financial theory and practice to provide you with the most accurate and relevant analysis tools.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Educational Focus</h2>
            <p>Beyond calculations, we're committed to helping you understand all aspects of investment analysis, including the importance of time value of money, risk assessment, and comparative analysis of investment opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}