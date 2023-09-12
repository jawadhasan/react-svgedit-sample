
import React, { useState } from "react";

  export function ButtonCounter (){

    const [counter, setCounter] = useState(0);

    return (

        <button className="btn btn-info" onClick={()=>setCounter(counter+1)}>
           {counter}
        </button>
    );
  }