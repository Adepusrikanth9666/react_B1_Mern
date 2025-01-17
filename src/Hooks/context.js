import React, { useContext } from "react";

import { dataContext} from '../App'

function Context(){

    const Data= useContext(dataContext);
    return(
        <>
        <div> this is a context
        <h3>{JSON.stringify(Data)}</h3>
       </div>
       </>
       
    )
}
export default Context;
