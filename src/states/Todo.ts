/** @format */

import { Reducer } from "redux";
import { TODO_STATUS_CHANGE, TODO_ADDED } from "../actions/Todo";
import { Todo } from "../models/Todo";

export type TodoState = {
  [id: number]: Todo;
};
export const initialTodoState = {};
export const todoReducer: Reducer<TodoState> = (
  state = initialTodoState,
  action
) => {
  switch (action.type) {
    case TODO_STATUS_CHANGE: {
      const { id, done } = action.payload;
      return {
        ...state,
        [id]: { ...state[id], done },
      };
    }
    case TODO_ADDED: {
      const todo: Todo = action.payload;

      return { ...state, [todo.id]: todo };
    }
    default:
      return state;
  }
};
