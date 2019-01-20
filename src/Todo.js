import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { TOGGLE_TODO } from "./actions";

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

const Todo = ({ todo, toggleTodo }) => (
  <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
);

export default connect(
  null,
  { toggleTodo }
)(Todo);
