import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar/Navbar";
import "./Counter/Counter";
import { Counter } from "./Counter/Counter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="Title">Counter Application Using useState</h1>
      <Counter />
    </div>
  );
}

export default App;
