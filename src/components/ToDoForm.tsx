/** @format */

import { ChangeEvent, FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { TODO_ADDED } from "../Actions";
import Button from "./Button";
import Card from "./Card";
import H1 from "./H1";
import Input from "./Input";
type ToDoFormProps = {
  onClose: () => void;
};

const ToDoForm: FC<ToDoFormProps> = ({ onClose }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch({ type: TODO_ADDED, payload: inputValue });
    setInputValue("");
    onClose();
  };

  return (
    <>
      <Card>
        <div className="space-y-6">
          <H1>Create a Todo</H1>
          <Input
            onChange={handleChange}
            value={inputValue}
            placeholder="add todo here"
          ></Input>
          <div className="space-x-6">
            <Button
              disabled={!inputValue}
              theme="primary"
              onClick={handleSubmit}
            >
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
