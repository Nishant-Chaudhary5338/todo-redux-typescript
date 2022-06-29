/** @format */

export const TODO_STATUS_CHANGE = "todo status change";
export const TODO_ADDED = "add todo";
export const TODO_DELETE = "delete todo";

let nextId = 0;
export const todoActionCreator = (todoText: string) => {
  return {
    type: TODO_ADDED,
    payload: { title: todoText, id: ++nextId, done: false },
  };
};

export const todoActionStatusChange = (todoId: number, newStatus: boolean) => {
  return {
    type: TODO_STATUS_CHANGE,
    payload: { id: todoId, done: newStatus },
  };
};
