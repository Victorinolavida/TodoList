import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ data, handleToggle, handleDelete }) {
  return (
    <ul className="list-group list-group-flush">
      {data.map((el, i) => {
        return (
          <TodoListItem
            key={el.id}
            el={el}
            i={i}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}
