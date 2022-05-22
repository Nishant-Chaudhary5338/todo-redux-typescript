/** @format */

import { FC, memo, useState } from "react";
import Button from "./Button";
import Container from "./Container";
import H1 from "./H1";
import H3 from "./H3";
import NavBar from "./NavBar";
import ToDoForm from "./ToDoForm";
import ToDoRow from "./ToDoRow";

type TodoPageProps = {};

const TodoPage: FC<TodoPageProps> = (props) => {
  const [todoform, setTodoForm] = useState(false);
  const [toDoList, updateToDoList] = useState([
    "do assignment",
    "go for a walk",
  ]);
  const [doneList, updateDoneList] = useState([
    "have breakfast",
    "watch lecture",
  ]);
  const showForm = () => setTodoForm(true);
  const hideForm = () => setTodoForm(false);
  const addToDo = (toDo: any) => {
    updateToDoList([...toDoList, toDo]);
  };
  const onToDoDelete = (toDo: any, done: any) => {
    if (done) {
      const newDoneList = doneList.filter((t) => t !== toDo);
      updateDoneList(newDoneList);
    } else {
      const newToDoList = toDoList.filter((t) => t !== toDo);
      updateToDoList(newToDoList);
    }
  };

  const markAsDone = (toDo: any) => {
    const newToDoList = toDoList.filter((t) => t !== toDo);
    updateToDoList(newToDoList);
    updateDoneList([...doneList, toDo]);
  };

  const markAsNotDone = (toDo: any) => {
    const newDoneList = doneList.filter((t) => t !== toDo);
    updateDoneList(newDoneList);
    updateToDoList([...toDoList, toDo]);
  };

  return (
    <>
      <NavBar></NavBar>
      <Container>
        <div>
          <div className="space-y-6 ">
            <H1>Things to get done</H1>
            <H3>Things to do</H3>
            {!toDoList.length && <div>NO! todos here</div>}
            {toDoList.map((t) => (
              <ToDoRow
                onDelete={onToDoDelete}
                onStatusChange={markAsDone}
                done={false}
                key={t}
              >
                {t}
              </ToDoRow>
            ))}
            {!todoform && (
              <Button onClick={showForm} theme="highlight">
                Add a todo
              </Button>
            )}
            {todoform && (
              <ToDoForm onSave={addToDo} onClose={hideForm}></ToDoForm>
            )}
            <H3>Things done</H3>
            {!doneList.length && <div>NO! todos here</div>}
            {doneList.map((t) => (
              <ToDoRow
                onDelete={onToDoDelete}
                onStatusChange={markAsNotDone}
                done={true}
                key={t}
              >
                {t}
              </ToDoRow>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

TodoPage.defaultProps = {};

export default memo(TodoPage);
