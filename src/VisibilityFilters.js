import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { getTodos } from "./actions";
const INCOMPLETE = "Todo";
const COMPLETED = "Completed";
const ALL = "All";
const FILTERS = { INCOMPLETE, COMPLETED, ALL };

const SET_FILTER = "SET_FILTER";

const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

const UnwrappedVisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(FILTERS).map(filterKey => {
        const currentFilter = FILTERS[filterKey];

        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityReducer };
};

const initialState = INCOMPLETE;

const visibilityReducer = (state = initialState, action) => {
  if (action.type === SET_FILTER) {
    return action.payload.filter;
  }
  return state;
};

const VisibilityFilters = connect(
  mapStateToProps,
  { setFilter }
)(UnwrappedVisibilityFilters);

const filterByVisibility = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case ALL:
    default:
      return allTodos;
  }
};

export { visibilityReducer, VisibilityFilters, filterByVisibility };
