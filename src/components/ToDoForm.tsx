/** @format */

import { FC, memo, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import H1 from "./H1";
import Input from "./Input";
type ToDoFormProps = {
  onClose: () => void;
  onSave: (inputValue: any) => void;
};

const ToDoForm: FC<ToDoFormProps> = ({ onClose, onSave }) => {
  const [inputValue, updateInputValue] = useState("");

  const onInputChange = (event: any) => {
    updateInputValue(event.target.value);
  };

  const saveToDo = () => {
    onSave(inputValue);
    updateInputValue("");
    onClose();
  };
  return (
    <>
      <Card>
        <div className="space-y-6">
          <H1>Create a Todo</H1>
          <Input
            onChange={onInputChange}
            value={inputValue}
            placeholder="add todo here"
          ></Input>
          <div className="space-x-6">
            <Button disabled={!inputValue} theme="primary" onClick={saveToDo}>
              Save
            </Button>
            <Button theme="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

ToDoForm.defaultProps = {};

export default memo(ToDoForm);
