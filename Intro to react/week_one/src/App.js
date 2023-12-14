import logo from "./logo.svg";
import "./App.css";
import "./Map_function/Mapf.css";
import "./Navbar/Navbar.css";
import { Greetins } from "./Greetins";
import { Mapf } from "./Map_function/Mapf";
import { Navbar } from "./Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="Title">Higer Order Functions Using .map Function</h1>
      <Greetins />
      <Mapf />
    </div>
  );
}

export default App;
