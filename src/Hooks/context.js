import React, { useContext } from "react";
import { dataContext,MovieInfoContext} from '../App'

function Context(){

    const Data= useContext(dataContext);
    let movie=useContext(MovieInfoContext)
    return(
        <>
        <div> this is a context
        <h3>{JSON.stringify(Data)}</h3>
        <h3>{JSON.stringify(movie)}</h3>
       </div>
       </>
       
    )
}
export default Context;
