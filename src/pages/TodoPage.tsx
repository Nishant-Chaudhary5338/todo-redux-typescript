/** @format */

import { FC, memo, useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import H1 from "../components/H1";
import H3 from "../components/H3";
import NavBar from "../components/NavBar";
import ToDoForm from "../components/ToDoForm";
import { IncompleteTodoList, CompleteTodoList } from "../components/TodoList";

type TodoPageProps = {};

const TodoPage: FC<TodoPageProps> = (props) => {
  const [form, setForm] = useState(false);

  const showForm = () => setForm(true);
  const hideForm = () => setForm(false);

  return (
    <>
      <NavBar></NavBar>
      <Container>
        <div>
          <div className="space-y-6 ">
            <H1>Things to get done</H1>
            <H3>Things to do</H3>
            <IncompleteTodoList></IncompleteTodoList>

            {!form && (
              <Button onClick={showForm} theme="highlight">
                Add a todo
              </Button>
            )}
            {form && <ToDoForm onClose={hideForm}></ToDoForm>}
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
