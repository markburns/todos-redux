import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { VisibilityFilters, visibilityReducer } from "./VisibilityFilters";
import "./styles.css";
import { todosReducer } from "./reducer";

const store = createStore(combineReducers({ todos, visibilityReducer }));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  </Provider>,
  rootElement
);
