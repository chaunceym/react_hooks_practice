import React from "react";
import "./App.css";
import FetchData from "./view/FetchData";
import UseReducerDemo from "./view/UseReducerDemo";
import Count from "./view/Count";
import CountClass from "./view/CountClass";

function App() {
  return (
    <>
      <div className="App">
        <Count />
        {/*<CountClass />*/}
        <FetchData />
        <UseReducerDemo />
      </div>
    </>
  );
}

export default App;
