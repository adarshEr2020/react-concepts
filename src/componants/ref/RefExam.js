import React, { useEffect, useRef, useState } from "react";
import { CustomInput } from "./CustomInput";
export const RefExam = () => {
  const [input, setInput] = useState("");
  //   const [count, setCount] = useState(1);
  const count = useRef(1);
  const inputRef = useRef();
  useEffect(() => {
    count.current += 1;
  });

  const inputHander = () => {
    console.log(inputRef.current);
    const val = inputRef.current.value;
    if (!val) inputRef.current.focus();
    else alert(val);
  };
  return (
    <div>
      <CustomInput
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => inputHander()}>submit</button>
      <br />
      <div>you have entered "{input}"</div>
      <div>Rerendred {count.current}</div>
    </div>
  );
};
