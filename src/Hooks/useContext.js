import React, { useContext } from "react";

import {MovieInfoContext } from "../App"
import Context from "./context";

function Usecontext(){
    const moviveData = useContext(MovieInfoContext);
    return(
        <>
        <div>
            THIS IS USECONTEXT
           <h1>{JSON.stringify(moviveData)}</h1>
           <Context/>
        </div>
        </>
        
    )
}

export default Usecontext;



