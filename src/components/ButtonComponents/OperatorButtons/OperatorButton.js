import React from "react";

const OperatorButton = props => {
    

    return (

    <span className="opButton">

    <button className = 'buttons1'onClick={()=>{props.newInfo(props.buttonV)}}> 
    {props.button}</button>

    </span>

  );
};
 export default OperatorButton;
    

