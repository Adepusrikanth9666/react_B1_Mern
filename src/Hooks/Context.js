import React, { useContext } from "react";
import { empInfoContext } from "../App";

const Context = ({ employeeData, name }) => {
  // In React, “context” refers to a mechanism that allows data to be shared
  // across multiple components without explicitly passing it through props.
  // useContext
  //    i have to get teh employee data over hereee!!

  const empDetails = useContext(empInfoContext);

  console.log(empDetails, "blogDeatils");
  return (
    <>
      <div>Here we are Learing Context hook</div>
      <h4>{JSON.stringify(empDetails)}</h4>
    </>
  );
};

export default Context;
