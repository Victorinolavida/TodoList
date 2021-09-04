import { useState } from "react";

export default function useCounterNew(inicialState = 10) {
  const [counter, setCounter] = useState(inicialState);

  const increment = function () {
    setCounter(counter + 1);
  };

  const decrement = function () {
    setCounter(counter - 1);
  };

  const reset = function () {
    setCounter(inicialState);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
}
