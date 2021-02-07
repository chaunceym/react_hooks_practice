import React, { useReducer } from "react";
const initialState = { str: "hello world" };
type ACTIONTYPE =
  | { type: "increment" }
  | { type: "decrement"; payload: string };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "increment":
      return { str: state.str.substr(0, 1) };
    case "decrement":
      return { str: state.str + action.payload };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count:{state.str}
      <button onClick={() => dispatch({ type: "decrement", payload: "1" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
};
export default Counter;
