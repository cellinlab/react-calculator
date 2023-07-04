import React, { useState } from "react";

import Display from "@/components/Display";
import ButtonPanel from "@/components/ButtonPanel";
import calculate from "@/lib/calculate";

import "./App.scss";

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (btnName) => {
    const data = { total, next, operation };
    console.log(data);
    const result = calculate(data, btnName);
    console.log(result);

    if (result.total !== undefined) {
      setTotal(result.total);
    }
    if (result.next !== undefined) {
      setNext(result.next);
    }
    if (result.operation !== undefined) {
      setOperation(result.operation);
    }
  };

  return (
    <div className="calculator">
      <Display value={next || total || "0"} />
      <ButtonPanel onClick={handleClick} />
    </div>
  );
};

export default App;
