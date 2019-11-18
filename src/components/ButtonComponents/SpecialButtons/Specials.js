import React, {useState} from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton"
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {

  const [specialState] = useState(specials);
  
  
	return (
	<div>

        {specialState.map((extra, index) => (

          <SpecialButton key={index} button={extra} />
        
        ))}
      </div>


    )
  }
  

export default Specials;
