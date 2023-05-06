import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEquals = () => {
    setInput(eval(input));
  };

  return (
    <center><div className="btn btn-primary">
      <div>{input}</div>
      <button onClick={() => handleButtonPress("7")}>7</button>
      <button onClick={() => handleButtonPress("8")}>8</button>
      <button onClick={() => handleButtonPress("9")}>9</button>
      <button className="btn btn-success" onClick={() => handleButtonPress("+")}>+</button>
      <br />
      <button onClick={() => handleButtonPress("4")}>4</button>
      <button onClick={() => handleButtonPress("5")}>5</button>
      <button onClick={() => handleButtonPress("6")}>6</button>
      <button className="btn btn-danger" onClick={() => handleButtonPress("-")}>-</button>
      <br />
      <button onClick={() => handleButtonPress("1")}>1</button>
      <button onClick={() => handleButtonPress("2")}>2</button>
      <button onClick={() => handleButtonPress("3")}>3</button>
      <button className="btn btn-info" onClick={() => handleButtonPress("*")}>*</button>
      <br />
      <button onClick={() => handleButtonPress("0")}>0</button>
      <button onClick={() => handleButtonPress(".")}>.</button>
      <button onClick={handleEquals}>=</button>
      <button className="btn btn-warning" onClick={() => handleButtonPress("/")}>/</button>
      <br />
      <button className="btn btn-danger" onClick={handleClear}>Clear</button>
    </div></center>
  );
}

export default Calculator;