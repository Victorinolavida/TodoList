import React from "react";

export default function TodoListItem({ el, i, handleToggle, handleDelete }) {
  return (
    <li key={el.id} className="list-group-item ">
      <p
        className={`${el.done && "complete"}`}
        onClick={() => handleToggle(el.id)}
      >
        {i + 1}. {el.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(el.id)}>
        Borrar
      </button>
    </li>
  );
}
