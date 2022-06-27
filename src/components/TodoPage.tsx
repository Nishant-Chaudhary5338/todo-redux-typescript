/** @format */

import { FC, memo, useState } from "react";
import { useSelector } from "react-redux";
import { Todo } from "../models/Todo";
import { completeTodoSelector, incompleteTodoSelector } from "../Selectors";
import Button from "./Button";
import Container from "./Container";
import H1 from "./H1";
import H3 from "./H3";
import NavBar from "./NavBar";
import ToDoForm from "./ToDoForm";
import TodoList, { CompleteTodoList, IncompleteTodoList } from "./TodoList";

type TodoPageProps = {};

const TodoPage: FC<TodoPageProps> = (props) => {
  const [todoform, setTodoForm] = useState(false);

  const showForm = () => setTodoForm(true);
  const hideForm = () => setTodoForm(false);

  return (
    <>
      <NavBar></NavBar>
      <Container>
        <div>
          <div className="space-y-6 ">
            <H1>Things to get done</H1>
            <H3>Things to do</H3>
            <IncompleteTodoList></IncompleteTodoList>

            {!todoform && (
              <Button onClick={showForm} theme="highlight">
                Add a todo
              </Button>
            )}
            {todoform && <ToDoForm onClose={hideForm}></ToDoForm>}
            <H3>Things done</H3>
            <CompleteTodoList></CompleteTodoList>
          </div>
        </div>
      </Container>
    </>
  );
};

TodoPage.defaultProps = {};

export default memo(TodoPage);
