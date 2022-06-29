/** @format */

import { useReducer } from "react";
import { createStore, Reducer } from "redux";
import { TODO_ADDED, TODO_STATUS_CHANGE } from "./actions/Todo";
import { Todo } from "./models/Todo";
import { initialTodoState, todoReducer, TodoState } from "./states/Todo";
import { initialUserState, userReducer, UserState } from "./states/User";

export type State = {
  todos: TodoState;
  users: UserState;
};

const initialState: State = {
  todos: initialTodoState,
  users: initialUserState,
};

const reducer: Reducer<State> = (state = initialState, action) => {
  return {
    todos: todoReducer(state.todos, action),
    users: userReducer(state.users, action),
  };
};

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
