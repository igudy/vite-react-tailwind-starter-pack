import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync } from "./slice/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="text-center justify-center mt-72">
      Redux Toolkit
      <div className="block">
        <button
          className="border bg-slate-600 w-10 h-10 rounded-xl"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="mx-20">{count}</span>
        <button
          className="border bg-slate-600 w-10 h-10 rounded-xl"
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <div className="">
          <input
            type="text"
            placeholder="Input Text"
            value={incrementAmount}
            className="w-10 h-10 mx-12 text-blue-500"
            onChange={(e) => setIncrementAmount(e.target.value)}
            border
          />
          <button
            className="bg-gray-300 p-3 my-3 rounded-xl"
            onClick={() =>
              dispatch(incrementAsync(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
