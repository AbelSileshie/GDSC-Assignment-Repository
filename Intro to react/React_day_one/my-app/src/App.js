import logo from "./logo.svg";
import "./App.css";
import "./Map_function/Mapf.css";
import { Greetins } from "./Greetins";
import { Mapf } from "./Map_function/Mapf";

function App() {
  return (
    <div className="App">
      <h1 className="Title">Higer Order Functions Using .map Function</h1>
      <Greetins />

      <Mapf />
    </div>
  );
}

export default App;
