import React, { useContext } from "react";

import {MovieInfoContext } from "../App"

function Usecontext(){
    const moviveData = useContext(MovieInfoContext);
    return(
        <>
        <div>
            THIS IS USECONTEXT
           <h1>{JSON.stringify(moviveData)}</h1>
        </div>
        </>
        
    )
}

export default Usecontext;



