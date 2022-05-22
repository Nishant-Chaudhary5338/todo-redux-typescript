/** @format */

import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Checkbox from "./components/Checkbox";
import Container from "./components/Container";
import H1 from "./components/H1";
import H3 from "./components/H3";
import Input from "./components/Input";
import FailedDisplayer from "./FailedDisplayer";
import FailedUpdator from "./FailedUpdator";
import NavBar from "./components/NavBar";
import PassedDisplayer from "./PassedDisplayer";
import PassedUpdator from "./PassedUpdator";
import ToDoForm from "./components/ToDoForm";
import TodoPage from "./components/TodoPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <PassedUpdator></PassedUpdator>
      <FailedUpdator></FailedUpdator>
      <FailedDisplayer></FailedDisplayer>
      <PassedDisplayer></PassedDisplayer>
      <TodoPage></TodoPage>
    </div>
  );
}

export default App;
