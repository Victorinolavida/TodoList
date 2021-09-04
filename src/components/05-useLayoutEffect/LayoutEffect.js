import React, { useLayoutEffect, useRef, useState } from "react";
import "../02-useEffect/effects.css";
import UseFetch from "../02-useEffect/UseFetch";
import useCounterNew from "../03-examples/hooks/useCounterNew";

import "./Layout.css";

export default function LayoutEffect() {
  const { counter, increment } = useCounterNew(1);

  const { data } = UseFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];
  /* la doble negacion sirve para en el primer momento, la data es null, asi que la primera negacion es 
  false, la segunda negacion regresa un true, por lo que author y quote es undefined.
  cuando la data es pasada, !!data es false asi que se ejecuta data[0]*/

  const pTag = useRef();

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    // console.log("hey");
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1> LayoutEffect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
      </blockquote>
      <pre>{JSON.stringify(boxSize)}</pre>
      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </div>
  );
}
