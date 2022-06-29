/** @format */

import { ChangeEvent, FC, memo, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { todoActionCreator, TODO_ADDED } from "../actions/Todo";
import { UserActionCreator } from "../actions/User";
import Button from "./Button";
import Card from "./Card";
import H1 from "./H1";
import Input from "./Input";
type UserFormProps = {
  onClose: () => void;
  onSubmit: (name: string) => void;
};

const UserForm: FC<UserFormProps> = ({ onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
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

UserForm.defaultProps = {};

export default connect(undefined, { onSubmit: UserActionCreator })(
  memo(UserForm)
);
