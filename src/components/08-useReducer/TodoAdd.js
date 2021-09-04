import React from "react";
import useForm from "../../hook/useForm";

export default function TodoAdd({ handleAddTo }) {
  const [{ description }, hanldeInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder="Aprender...."
          autoComplete="off"
          value={description}
          onChange={hanldeInputChange}
        />
        <button
          className="btn btn-outline-primary mt-1 btn-block"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </>
  );
}
