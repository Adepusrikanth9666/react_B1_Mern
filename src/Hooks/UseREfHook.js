import React, { useRef } from "react";

const UseREfHook = () => {
  // directly we are intracting wi  th teh real DOM
  const inputRef = useRef();

  const handleClick = (event) => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>UseRef we are learning.........</h3>
      <input ref={inputRef} placeholder="Enter you name" type="text" />
      <button onClick={(e) => handleClick(e)}>Focus Input</button>
    </div>
  );
};

export default UseREfHook;
