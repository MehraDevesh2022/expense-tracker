
import React ,{useReducer , createContext} from "react";
import AppReducer from "./AppReducer";

const intitalState = {
  transection: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ]
};

// create context =>
export const GlobalContext = createContext(intitalState);

export function GlobalContextProvider(props){
  const [state , dispatch] = useReducer(AppReducer , intitalState);

   function deleteTransection(id){
    dispatch(
       { type : 'Delete_Transection',
         payLoad : id
    }
    )
   }

   function addTrasnsection(transection){
       
    dispatch({
      type: "Add_Transection",
      payLoad: transection,
    });
   }

    return(
        <GlobalContext.Provider value={
          {
            transection : state.transection,
            addTrasnsection,
            deleteTransection
          }
        } >
          {props.children}
        </GlobalContext.Provider>
    )
}
