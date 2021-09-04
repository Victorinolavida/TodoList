import React, { useEffect, useState } from "react";
import "./effects.css";
import Message from "./Message";

export default function SimpleForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = state;

  useEffect(() => {
    // console.log("Hey!");
  }, []);

  useEffect(() => {
    // console.log("state cambió");
  }, [state]);

  useEffect(() => {
    // console.log("email cambió!");
  }, [email]);

  const handleInputChage = function ({ target }) {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChage}
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChage}
        />
      </div>

      {name === "123" && <Message />}
    </>
  );
}
