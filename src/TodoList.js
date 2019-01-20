import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { filterByVisibility } from "./VisibilityFilters";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = state => {
  const { visibilityReducer } = state;
  const todos = filterByVisibility(state, visibilityReducer);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
