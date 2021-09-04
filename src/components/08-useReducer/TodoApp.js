import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
// import useForm from "../../hook/useForm";
import { useEffect } from "react/cjs/react.development";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

import "./style.css";

export default function TodoApp() {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  // console.log(todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // console.log(description);

  const handleDelete = function (todoID) {
    console.log(todoID);
    const action = {
      type: "detele",
      payload: todoID,
    };
    dispatch(action);
  };
  const handleToggle = function (todoId) {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleAddTo = function (newTodo) {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1>TodoApp ( {todos.length} )</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          todos
          <TodoList
            data={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTo={handleAddTo} />
        </div>
      </div>
    </div>
  );
}
