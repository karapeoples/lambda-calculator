import React from "react";

const SpecialButton = (props) => {
  return (
    <span className= 'spButton'>
    <button className = 'buttons3' onClick={()=>{props.newInfo(props.button)}}> 
    {props.button}</button>
    </span>
  );
};
 export default SpecialButton;
