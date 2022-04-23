import React, { useRef, useEffect, useLayoutEffect } from "react";
export default function LayoutEffectHooks() {
  const inputRef = useRef();

  /*The useLayoutEffect function is triggered synchronously before the DOM mutations are painted.
   However, the useEffect function is called after the DOM mutations are painted.*/
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
    console.log(inputRef);
  }, []);

  //  However, the useEffect function is called after the DOM mutations are painted.*/

  useEffect(() => {
    console.log((inputRef.current.value = "hello"));
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        value="first"
        style={{ width: "100px", height: "20px" }}
      ></input>
    </div>
  );
}
