/** @format */

import { FC, memo } from "react";
import { connect } from "react-redux";
import { todoActionStatusChange } from "../actions/Todo";
import { Todo } from "../models/Todo";
import {
  completeTodoSelector,
  incompleteTodoSelector,
} from "../selectors/todo";
import { State } from "../store";
import ToDoRow from "./ToDoRow";
type TodoListProps = {
  todos: Todo[];
  onStatusChange: (id: number, done: boolean) => void;
};

const TodoList: FC<TodoListProps> = ({ todos, onStatusChange }) => {
  /*const dispatch = useDispatch();
  const handleStatusChange = (id: number, done: boolean) => {
    dispatch(todoActionStatusChange(id, done));
  };*/
  return (
    <div>
      {todos.map((t) => (
        <ToDoRow onStatusChange={onStatusChange} todo={t} key={t.id}></ToDoRow>
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
const dispatchMapper = {
  onStatusChange: todoActionStatusChange,
};

export const IncompleteTodoList = connect(
  inCompleteMapper,
  dispatchMapper
)(TodoList);
export const CompleteTodoList = connect(
  completeMapper,
  dispatchMapper
)(TodoList);
