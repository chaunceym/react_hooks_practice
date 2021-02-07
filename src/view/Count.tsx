import React, { useEffect, useReducer, useRef, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hahaha");
    const id = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount((count) => count + 1)}>+1</button>
    </div>
  );
};
export default Count;
