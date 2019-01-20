import { ADD_TODO, TOGGLE_TODO } from "./constants";

const initialState = {
  allIds: [],
  byIds: {}
};
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
const getTodos = store => getTodoList(store).map(id => getTodoById(store, id));

export { getTodos };
