import React from "react";

const OperatorButton = props => {
    console.log (props)

    return (

    <span className="opButton">

    <button className = 'buttons'> 
    {props.button}</button>

    </span>

  );
};
 export default OperatorButton;
    

