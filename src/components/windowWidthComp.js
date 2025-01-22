import React from "react";
import useWindowWidth from "../Hooks/customHook";

const WindowWidthComp = () => {
  const width = useWindowWidth(); // custom hook
  return (
    <div>
      <h1>Window width</h1>
      <p>The Current window width is : {width} px </p>
    </div>
  );
};

export default WindowWidthComp;
