import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [initialAmount, setInitialAmount] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [annualInterestRate, setAnnualInterestRate] = useState(0);
  const [years, setYears] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [compoundInterest, setCompoundInterest] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const calculateCompoundInterest = () => {
    const monthlyRate = annualInterestRate / 100 / 12;
    const totalMonths = years * 12;
    let futureValue = initialAmount * Math.pow(1 + monthlyRate, totalMonths);

    for (let i = 1; i <= totalMonths; i++) {
      futureValue += monthlyContribution * Math.pow(1 + monthlyRate, totalMonths - i);
    }

    const totalInvested = initialAmount + (monthlyContribution * totalMonths);
    const interestEarned = futureValue - totalInvested;

    setTotalAmount(futureValue.toFixed(2));
    setTotalInvestment(totalInvested.toFixed(2));
    setCompoundInterest(interestEarned.toFixed(2));
    setShowResults(true);
  };

  return (
    <div className="calculator-container">
      <h1>Mutual Funds Compound Interest Calculator</h1>
      <div className="form-group">
        <label>Initial Amount:</label>
        <input
          type="number"
          // value={initialAmount}
          onChange={(e) => setInitialAmount(parseFloat(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label>Monthly Contribution:</label>
        <input
          type="number"
          // value={monthlyContribution}
          onChange={(e) => setMonthlyContribution(parseFloat(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          // value={annualInterestRate}
          onChange={(e) => setAnnualInterestRate(parseFloat(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label>Number of Years:</label> 
        <input
          type="number"
          // value={years}
          onChange={(e) => setYears(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calculateCompoundInterest}>Calculate</button>

      {showResults && (
        <div className="results">
          <div>Total Amount: <span>&#x20B9;{totalAmount}</span></div>
          <div>Total Investment: <span>&#x20B9;{totalInvestment}</span></div>
          <div>Compound Interest Earned: <span>&#x20B9;{compoundInterest}</span></div>
        </div>
      )}

      {/* if(showResults==true){
      <div>
        <div>Total Amount: <span>&#x20B9;{totalAmount}</span></div>
        <div>Total Investment: <span>&#x20B9;{totalInvestment}</span></div>
        <div>Compound Interest Earned: <span>&#x20B9;{compoundInterest}</span></div>
      </div>
      }
      else{
        none
      } */}
    </div>
  );
};

export default Calculator;
