import React, { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOperator] = useState("");

  const appendNumber = (number) => {
    setCurrentNumber(currentNumber + number);
  };

  const appendOperator = (op) => {
    setPreviousNumber(currentNumber);
    setCurrentNumber("");
    setOperator(op);
  };

  const clearDisplay = () => {
    setCurrentNumber("");
    setPreviousNumber("");
    setOperator("");
  };

  const calculate = () => {
    let result = 0;
    const prevNum = parseFloat(previousNumber);
    const currNum = parseFloat(currentNumber);
    switch (operator) {
      case "+":
        result = prevNum + currNum;
        break;
      case "-":
        result = prevNum - currNum;
        break;
      case "*":
        result = prevNum * currNum;
        break;
      case "/":
        if (currNum === 0) {
          alert("Error: Cannot divide by zero!");
          return;
        }
        result = prevNum / currNum;
        break;
      default:
        break;
    }
    setCurrentNumber(result.toString());
    setPreviousNumber("");
    setOperator("");
  };

  return (
    <div className="calculator">
      <input type="text" id="display" value={currentNumber} readOnly />
      <div className="buttons">
        <button onClick={() => appendNumber("7")}>7</button>
        <button onClick={() => appendNumber("8")}>8</button>
        <button onClick={() => appendNumber("9")}>9</button>
        <button onClick={() => appendOperator("/")}>/</button>
        <button onClick={() => appendNumber("4")}>4</button>
        <button onClick={() => appendNumber("5")}>5</button>
        <button onClick={() => appendNumber("6")}>6</button>
        <button onClick={() => appendOperator("*")}>*</button>
        <button onClick={() => appendNumber("1")}>1</button>
        <button onClick={() => appendNumber("2")}>2</button>
        <button onClick={() => appendNumber("3")}>3</button>
        <button onClick={() => appendOperator("-")}>-</button>
        <button onClick={() => appendNumber("0")}>0</button>
        <button onClick={clearDisplay}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => appendOperator("+")}>+</button>
      </div>
    </div>
  );
}

export default App;
