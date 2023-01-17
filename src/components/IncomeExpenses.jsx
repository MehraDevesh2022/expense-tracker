import React ,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

function IncomeExpenses() {
   const {transection} = useContext(GlobalContext);
     const amount  = transection.map(obj => obj.amount);
       
      // count income => all positive value is income others expense
         const income = amount.filter(num => num>0).reduce((acc , item) => (acc += item) ,0)  
         // expense
         const expense = amount.filter(num => num<0).reduce((acc ,item) => (acc += item) ,0) ; // for negatvie value 
        
         
  return ( 
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses