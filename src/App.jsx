import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransectionList from './components/TransectionList';
import AddTransection from './components/AddTrasnsection.jsx.jsx';
import './App.css';

function App() {
  return (
    <div className='main'>
      <Header />
      <div className="main-container">
        <Balance />
        <IncomeExpenses />
        <TransectionList />
        <AddTransection />
      </div>
    </div>
  );
}

export default App;
