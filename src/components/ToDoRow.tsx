/** @format */

import { FC, memo } from "react";
import Checkbox from "./Checkbox";
import { AiFillDelete } from "react-icons/ai";
type ToDoRowProps = {
  children: string | number;
  done: boolean;
  onDelete: (children: string | number, done: () => void) => void;
  onStatusChange: (children: any) => void;
};

const ToDoRow: FC<ToDoRowProps> = ({ done, onStatusChange, children }) => {
  const onCheckBoxChange = (event: any) => {
    onStatusChange(children);
  };

  const onDelete = () => {
    onDelete();
  };
  return (
    <div className="flex items-center space-x-4">
      <Checkbox onChange={onCheckBoxChange} checked={done}></Checkbox>
      <span className="text-sm font-medium text-gray-700 ">{children}</span>
    </div>
  );
};

ToDoRow.defaultProps = {};

export default memo(ToDoRow);
