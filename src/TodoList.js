import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { filterByVisibility } from "./VisibilityFilters";

const getTodosState = store => store.todos;

const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

/**
 *
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

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
