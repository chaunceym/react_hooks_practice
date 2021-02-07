import React, { useEffect, useReducer, useRef, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log(count);
    },3000);
  });
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};
export default Count;
