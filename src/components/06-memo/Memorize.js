import React, { useState } from "react";
import useCounterNew from "../03-examples/hooks/useCounterNew";
import "../02-useEffect/effects.css";
import { Small } from "./Small";

export default function Memorize() {
  // const { counter, increment } = useCounterNew(10);
  const { counter, increment } = useCounterNew(10);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>
        Counter:
        <Small value={counter} />
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hiden {JSON.stringify(show)}
      </button>
    </div>
  );
}
