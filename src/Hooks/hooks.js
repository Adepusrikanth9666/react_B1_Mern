// First react has started with Classs componets - Life cyle menthods
// -> Next adv version is Functional componets  - hooks

//  hOOKS HAS BEEN INTRODUCED IN FUNCTIONAL COMPONENTS
// THere are Differetn types of Hooks
// -> UseState - intail values
// -> UseEffect - side effects ,Dom manipulations
// -> UseContext
// -> useReducer hook - function and intial value
// -> useCallback hook -> next
// -> useRef hook ->
// -> UseMEmo
// ->useLayoutEffect hook
// etc..... lot more....
// Custom Hooks (Imp to learn)

// _______________________________________________________________

// This Hooks has beeen intro in 16.8 version

// Benfits of using Hoooks is :
// -> Simplify the code (no need of class comp..)
// ->it Enhance the reusability using Cuatom hooks
// -> Improves in teh readability

// -----------------
// -> To Overcome the challenge of Classs comp..
// -> Easier to share the logic among other components

// 1. UseState (very Imp...):

import React from "react";
import { useState } from "react";

const StateHook = () => {
  const [incrementValue, setIncrementValue] = useState(0);

  const handleIncrement = () => {
    let updateValue = incrementValue + 1;
    setIncrementValue(updateValue);
  };

  const handleReset = () => {
    setIncrementValue(0);
  };

  return (
    <div>
      <h1>This is my First UseState Hook</h1>
      {incrementValue}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <h1>We Are Creating Tally counter with Increment and reset</h1>
    </div>
  );
};

export default StateHook;
