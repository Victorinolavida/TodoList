import { useState } from "react";

export default function useCounter(inicialState = 10) {
  const [state, setstate] = useState(inicialState);

  const increment = function (factor = 1) {
    setstate(state + factor);
  };

  const decrement = function (factor = 1) {
    setstate(state - factor);
  };

  const reset = function () {
    setstate(inicialState);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
}
