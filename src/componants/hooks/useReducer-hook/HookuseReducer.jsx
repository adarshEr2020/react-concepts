import React, { useReducer } from "react";

const initialstate = 0;

// useReducer hook manage the state we are using when we are working on big  project and that time we
// can use useReducer managing the state

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

const HookuseReducer = () => {
  //   connst[(count, setCount)] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h1>useReducer hook</h1>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <br />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      <br />
    </div>
  );
};

export default HookuseReducer;
