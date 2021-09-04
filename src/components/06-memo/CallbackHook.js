import React, { useState, useCallback } from "react";
import ShowIncrement from "./ShowIncrement";

import "../02-useEffect/effects.css";

export default function CallbackHook() {
  const [counter, setCounter] = useState(10);

  // const increment = () => {
  // setCounter(counter + 1);
  // };
  //
  const incrementa = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>useCallback Hook:{counter}</h1>
      <hr />
      <ShowIncrement increment={incrementa} />
    </div>
  );
}
