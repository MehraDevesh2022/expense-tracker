import React ,{useState , useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

function AddTransection() {
const {  addTrasnsection } = useContext(GlobalContext);
const [text , setText] = useState('');
const [amount , setAmount] = useState(0);

    
function handleSubmit(e){
  e.preventDefault();
  if(amount ===0 || text === ''){
    return
  } 
  
  const newTransection = {
       id: Math.trunc(Math.random() * 10000),
       text,
       amount : Number(amount)
     };
    addTrasnsection(newTransection);
     setAmount(0); 
     setText(''); 
}

  
  return (
    <>
      <h3>Add new transaction</h3>
      <form action="submit" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter Text....."
            value={text}
            onChange={(e) => setText(e.target.value)}

          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (Negative = Expense, Postive = Income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount...."
          />
        </div>
        <button className="btn">Add Transection</button>
      </form>
    </>
  );
}

export default AddTransection