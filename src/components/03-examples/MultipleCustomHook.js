import React from "react";
import "../02-useEffect/effects.css";
import UseFetch from "../02-useEffect/UseFetch";
import useCounterNew from "./hooks/useCounterNew";

export default function MultipleCustomHook() {
  const { counter, increment } = useCounterNew(1);

  const { data, loading } = UseFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  /* la doble negacion sirve para en el primer momento, la data es null, asi que la primera negacion es 
    false, la segunda negacion regresa un true, por lo que author y quote es undefined.
    cuando la data es pasada, !!data es false asi que se ejecuta data[0]*/

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <div>
          <blockquote className="blockquote text-right">
            <p className="mb-0">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>

          <button className="btn btn-primary" onClick={increment}>
            Next Quote
          </button>
        </div>
      )}
    </div>
  );
}
