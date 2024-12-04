import React, { useState } from 'react';
import { Calculator as CalcIcon, DollarSign } from 'lucide-react';
import ResultsDisplay from './ResultsDisplay';
import CashFlowInput from './CashFlowInput';
import { 
  InvestmentData,
  CashFlow,
  calculateNPV,
  calculatePI,
  calculatePaybackPeriod,
  calculateIRR
} from '../../utils/calculations';

export default function Calculator() {
  const [formData, setFormData] = useState<InvestmentData>({
    initialInvestment: 0,
    discountRate: 10,
    cashFlows: [{ year: 1, amount: 0 }]
  });

  const [results, setResults] = useState<{
    npv: number;
    pi: number;
    paybackPeriod: number;
    irr: number;
  } | null>(null);

  const calculateResults = () => {
    const npv = calculateNPV(formData);
    const pi = calculatePI(formData);
    const paybackPeriod = calculatePaybackPeriod(formData);
    const irr = calculateIRR(formData);

    setResults({
      npv,
      pi,
      paybackPeriod,
      irr
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-center mb-6">
        <CalcIcon className="h-8 w-8 text-indigo-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Profitability Index Calculator</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="initialInvestment" className="block text-sm font-medium text-gray-700">
            Initial Investment
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="initialInvestment"
              value={formData.initialInvestment}
              onChange={(e) => setFormData({...formData, initialInvestment: parseFloat(e.target.value) || 0})}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label htmlFor="discountRate" className="block text-sm font-medium text-gray-700">
            Discount Rate (%)
          </label>
          <input
            type="number"
            id="discountRate"
            value={formData.discountRate}
            onChange={(e) => setFormData({...formData, discountRate: parseFloat(e.target.value) || 0})}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            step="0.1"
          />
        </div>

        <CashFlowInput 
          cashFlows={formData.cashFlows}
          onChange={(cashFlows) => setFormData({...formData, cashFlows})}
        />

        <button
          onClick={calculateResults}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Calculate Profitability Index
        </button>

        {results && <ResultsDisplay {...results} />}
      </div>
    </div>
  );
}