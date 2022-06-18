import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counter";
import "./App.css"

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="App-header">
      <h1>Counter {counter}</h1>
      <div>
        <button onClick={() => dispatch(increment(5))}>Increment</button>
        <button onClick={() => dispatch(decrement(5))}>Decrement</button> 
      </div>
    </div>
  );
}

export default App;

