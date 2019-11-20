import React from "react";


const NumberButton = props => {
 
  return (
    <span className= 'numButton'>
    <button className = 'buttons2'onClick={()=>{props.newInfo(props.button)}}> 
    {props.button}</button>
    </span>
  );
};
 export default NumberButton;