import React from "react";

export default React.memo(function ShowIncrement({ increment }) {
  console.log("me volvi a generar");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
