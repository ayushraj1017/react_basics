//counter using useReducer

import { useState, useReducer } from "react";
import React from "react";



const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, count: action.payload + 1 };
  }

  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }

  if (action.type === "DECREMENT") {
    return { ...state, count: action.payload - 1 };
  }
};

const initialState = {
  count: 0,
};

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>{state.count}</div>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", payload: state.count });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET", payload: state.count });
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT", payload: state.count });
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
