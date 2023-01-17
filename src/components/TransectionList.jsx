import React from 'react'

function TransectionList() {
  return (
    <div>
       <h3>Trasncetion History</h3> 
       <ul>
         <li className="minus">
          Cash <span>-$400</span><button className ="delete-btn">x</button>
        </li> 
       </ul>
    </div>
  )
}

export default TransectionList