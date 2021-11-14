import React, { useState } from "react";
export default function Example1() {
  const [theArray, setTheArray] = useState([]);
  const addEntryClick = () => {
    setTheArray([...theArray,`${theArray.length}` ]);
  };
  console.log(theArray);
  return (
    <div>
      <button onClick={addEntryClick}>add</button>

      {theArray.map((entry, index) => (
        <div>{entry} index{index}</div>
      ))}
    </div>
  );
}
