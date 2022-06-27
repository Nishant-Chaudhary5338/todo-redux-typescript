/** @format */

import { FC, memo, useCallback } from "react";
import { AiFillDelete } from "react-icons/ai";
import cn from "classnames";
import { Todo } from "../models/Todo";
type ToDoRowProps = {
  todo: Todo;
  onStatusChange: (id: number, done: boolean) => void;
};

const ToDoRow: FC<ToDoRowProps> = ({ onStatusChange, todo }) => {
  const { id, title, done } = todo;
  const handleChange = useCallback(() => {
    onStatusChange(id, !done);
  }, [id, done]);

  return (
    <div className="flex items-center space-x-4">
      <input
        className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
        type="checkbox"
        onChange={handleChange}
        checked={done}
      ></input>
      <p
        className={cn("text-sm font-medium text-gray-700", {
          "line-through": done,
        })}
      >
        {title}
      </p>
    </div>
  );
};

ToDoRow.defaultProps = {};

export default memo(ToDoRow);
