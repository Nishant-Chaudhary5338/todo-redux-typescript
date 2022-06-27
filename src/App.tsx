/** @format */

import { useState } from "react";

import TodoPage from "./components/TodoPage";
import ReduxExample from "./redux Example/ReduxExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <TodoPage></TodoPage>
    </div>
  );
}

export default App;
