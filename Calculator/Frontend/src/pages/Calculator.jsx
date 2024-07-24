import { useState } from "react";
import axios from "axios";
const Calculator = () => {
  const [input, setInput] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("");

  const handleOperator = (e) => {
    const op = e.target.innerText;
    if (op === "+") {
      setOperator("add");
    } else if (op === "-") {
      setOperator("sub");
    } else if (op === "*") {
      setOperator("mul");
    } else if (op === "/") {
      setOperator("div");
    }

    setNum1(parseInt(input));
    setInput("");
  };

  const handleEqual = async () => {
    setNum2(parseInt(input));
    setInput("Calculating...");
    console.log(num1, num2, operator);
    const result = await axios.post("http://localhost:5555/calculate", {
      num1,
      num2: parseInt(input),
      operation: operator,
    });

    setInput(result.data.result);
    console.log(result.data.result);
  };

  const handleInput = (e) => {
    console.log(e.target.innerText);
    setInput(input + e.target.innerText);
  };

  return (
    <div className="w-40 h-60 border border-r-2 m-3">
      <h1 className="text-2xl text-center">Calculator</h1>
      <div className="flex flex-col">
        <input
          type="text"
          className="border m-1 p-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex">
          <button className="border m-1 p-1 w-8" onClick={handleInput}>
            1
          </button>
          <button className="border m-1 p-1 w-8" onClick={handleInput}>
            2
          </button>
          <button className="border m-1 p-1 w-8" onClick={handleInput}>
            3
          </button>
          <button className="border m-1 p-1 w-8" onClick={handleOperator}>
            +
          </button>
        </div>
        <div className="flex">
          <button className="border m-1 p-1 w-8" onClick={handleInput}>
            4
          </button>
          <button className="border m-1 p-1 w-8" onClick={handleInput}>
            5
          </button>
          <button className="border m-1 p-1 w-8" onClick={handleInput}>
            6
          </button>
          <button className="border m-1 p-1 w-8" onClick={handleOperator}>
            -
          </button>
        </div>
        <div className="flex">
          <button className="border m-1 p-1 w-8" onClick={handleInput}>
            7
          </button>
          <button className="border m-1 p-1 w-8" onClick={handleInput}>
            8
          </button>
          <button className="border m-1 p-1 w-8" onClick={handleInput}>
            9
          </button>
          <button className="border m-1 p-1 w-8" onClick={handleOperator}>
            *
          </button>
        </div>
        <div className="flex">
          <button className="border m-1 p-1 w-8">0</button>
          <button className="border m-1 p-1 w-8">.</button>
          <button className="border m-1 p-1 w-8" onClick={handleEqual}>
            =
          </button>
          <button className="border m-1 p-1 w-8" onClick={handleOperator}>
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
