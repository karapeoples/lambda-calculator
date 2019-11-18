import React from "react";

const SpecialButton = (props) => {
  return (
    <span className= 'spButton'>
    <button className = 'buttons'> 
    {props.button}</button>
    </span>
  );
};
 export default SpecialButton;
