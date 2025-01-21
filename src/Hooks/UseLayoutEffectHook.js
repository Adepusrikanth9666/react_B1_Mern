import React, { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffectHook = () => {
  // its similar to useEffect
  // /The useLayoutEffect hook is similar to useEffect, but it’s executed synchronously after all DOM mutations.
  // This makes it useful for manipulating the DOM immediately after a component is rendered.

  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(boxRef.current.clientWidth);
      setHeight(boxRef.current.clientHeight);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h4>We are Learnig the useLayoutEffect hook here!!!!!!!!</h4>
      <div
        ref={boxRef}
        style={{ width: "50%", height: "50%", backgroundColor: "red" }}
      >
        <p>width:{width} px</p>
        <p>height:{height}px</p>
      </div>
    </div>
  );
};

export default UseLayoutEffectHook;
