import React, { useState } from "react";
// import { useState } from "react";
import MultipleCustomHook from "../03-examples/MultipleCustomHook";
import "../02-useEffect/effects.css";

export default function RealExampleRef() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real example</h1>
      <hr />
      {show && <MultipleCustomHook />}
      <button className="btn btn-primary mt-5" onClick={() => setShow(!show)}>
        Show/hide
      </button>
    </div>
  );
}
