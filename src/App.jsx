import React, { useState } from "react";
import { useCounterStore } from "./store/counterStore";

function App() {
  const [inputValue, setinputValue] = useState("");
  const { count, increment, decrement, reset } = useCounterStore();

  // handle incremental values
  const handleIncrement = () => {
    if (inputValue) {
      const value = parseInt(inputValue, 10);
      increment(value);
    }
  };

  // handle decremental values
  const handleDecrement = () => {
    if (inputValue) {
      const value = parseInt(inputValue, 10);
      decrement(value);
    }
  };

  // reset value
  const handleReset = () => {
    if (inputValue) {
      const value = parseInt(inputValue, 10);
      reset(value);
    }
  };

  return (
    <div className="text-center justify-center">
      <input
        type="text"
        placeholder="input your value"
        className="border-blue-500"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />

      <h1 className="flex mt-10 text-2xl gap-3">Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
