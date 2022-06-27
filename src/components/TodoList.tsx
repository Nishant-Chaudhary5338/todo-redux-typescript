/** @format */

import { FC, memo } from "react";
import { connect, useDispatch } from "react-redux";
import { TODO_STATUS_CHANGE } from "../Actions";
import { Todo } from "../models/Todo";
import { completeTodoSelector, incompleteTodoSelector } from "../Selectors";
import { State } from "../store";
import ToDoRow from "./ToDoRow";
type TodoListProps = {
  todos: Todo[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  const dispatch = useDispatch();
  const handleStatusChange = (id: number, done: boolean) => {
    dispatch({ type: TODO_STATUS_CHANGE, payload: { id, done } });
  };
  return (
    <div>
      {todos.map((t) => (
        <ToDoRow
          onStatusChange={handleStatusChange}
          todo={t}
          key={t.id}
        ></ToDoRow>
      ))}
    </div>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);

const inCompleteMapper = (s: State) => {
  return { todos: incompleteTodoSelector(s) };
};

const completeMapper = (s: State) => {
  return { todos: completeTodoSelector(s) };
};

export const IncompleteTodoList = connect(inCompleteMapper)(TodoList);
export const CompleteTodoList = connect(completeMapper)(TodoList);
