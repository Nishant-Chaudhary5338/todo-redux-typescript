/** @format */

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import TodoPage from "./pages/TodoPage";
import UsersPage from "./pages/UsersPage";
import ReduxExample from "./redux Example/ReduxExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route index element={<TodoPage></TodoPage>}></Route>
        <Route path="/users" element={<UsersPage></UsersPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
