import React, {useState} from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton"
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  

    const [operatorState] = useState(operators);
    
    
    return (
    <div className="button_container">
  
          {operatorState.map((sign, index) => (
  
            <OperatorButton key={index} button={sign.char} />
          
          ))}
        </div>
  
  
      )
    }
    
  
  export default Operators;
 
