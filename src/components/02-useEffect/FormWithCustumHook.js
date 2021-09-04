import React from "react";
import useForm from "../../hook/useForm";
import "./effects.css";

export default function FormWithCustumHook() {
  const [formValue, handleInputChage] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValue;

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(formValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustumHook</h1>
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

      <div>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*******"
          value={password}
          onChange={handleInputChage}
        />
      </div>
      <button type="submit" className="btn-primary">
        Guardar
      </button>
    </form>
  );
}
