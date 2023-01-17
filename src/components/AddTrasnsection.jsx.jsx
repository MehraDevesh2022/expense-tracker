import React from 'react'

function AddTransection() {
  
  
  
  return (
    <>
      <h3>Add new transaction</h3>
      <form action="submit">
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" 
            placeholder='Enter Text.....'
            />
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount <br />
            (Negative = Expense, Postive = Income)
            </label>
            <input type="number" 
            placeholder='Enter Amount....'
            />
        </div>
        <button className="btn">Add Transection</button>
      </form>
    </>
  );
}

export default AddTransection