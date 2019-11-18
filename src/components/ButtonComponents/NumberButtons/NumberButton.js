import React from "react";


const NumberButton = props => {
 
  return (
    <span className= 'numButton'>
    <button className = 'buttons'> 
    {props.button}</button>
    </span>
  );
};
 export default NumberButton;