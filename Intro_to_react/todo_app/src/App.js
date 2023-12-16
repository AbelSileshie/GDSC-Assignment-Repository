import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./Components/TodoList";
function App() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
