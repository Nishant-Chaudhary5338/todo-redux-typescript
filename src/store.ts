/** @format */

import { createStore, Reducer } from "redux";
import { TODO_ADDED, TODO_STATUS_CHANGE } from "./Actions";
import { Todo } from "./models/Todo";

export type State = {
  todos: Todo[];
};

const initialState: State = {
  todos: [
    {
      id: 1,
      title: "bring milk",
      done: false,
    },
    {
      id: 2,
      title: "bring tea",
      done: true,
    },
  ],
};
let nextId = 3;
const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case TODO_STATUS_CHANGE: {
      const { id, done } = action.payload;
      const newTodos = state.todos.map((t) => {
        if (t.id === id) {
          return { ...t, done };
        }
        return t;
      });
      return { ...state, todos: newTodos };
    }
    case TODO_ADDED: {
      const todoText = action.payload;
      const todo: Todo = { id: nextId, title: todoText, done: false };
      nextId++;
      return { ...state, todos: [...state.todos, todo] };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
