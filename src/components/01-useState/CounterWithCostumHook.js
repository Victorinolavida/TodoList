import React from "react";
import useCounter from "../../hook/useCounter";

import "./counter.css";

export const CounterWithCostumHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>Counter with Hook:{state}</h1>
      <hr></hr>
      <button className="btn btn-primary" onClick={() => increment(10)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        reset
      </button>

      <button className="btn btn-primary" onClick={() => decrement(10)}>
        -1
      </button>
    </>
  );
};
