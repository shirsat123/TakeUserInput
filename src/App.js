import "./styles.css";
import React, { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <h1>Take input from user & convert it into DD/MM/YYYY</h1>
      <UserInput />
    </div>
  );
}

function UserInput() {
  const [input, setInput] = useState();
  const [state, setState] = useState();
  const [error, setError] = useState();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length !== 8) {
      setError("Minimum 8 digit required.");
      return;
    }

    const newInput = `${input.substring(0, 2)}/${input.substring(
      2,
      4
    )}/${input.substring(4, 8)}`;

    setState(newInput);
  };
  return (
    <div>
      <input
        type="number"
        placeholder="dd/mm/yyyy"
        value={input}
        onChange={handleInput}
      />

      <br />
      <br />
      <button onClick={handleSubmit}>+</button>
      <h2>{state}</h2>
      <br />
      <h2>{error}</h2>
    </div>
  );
}
