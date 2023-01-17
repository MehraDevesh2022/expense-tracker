import React from 'react'

function IncomeExpenses() {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+8878</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-887</p>
      </div>
    </div>
  );
}

export default IncomeExpenses