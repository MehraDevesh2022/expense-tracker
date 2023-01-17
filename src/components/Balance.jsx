import React ,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


function Balance() {
  const {transection } = useContext(GlobalContext);
  //  console.log(transection);
  const amount = transection.map(item => item.amount).reduce((acc , item) => (acc +=item) ,0).toFixed(2);

  
  return (
    <>
    <h4>
      MY Balance :
    </h4>
     <h1>${amount}</h1>
    </>
  )
}

export default Balance