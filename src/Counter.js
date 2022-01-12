import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";

const Counter = () => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    document.title = val > 0 ? `Counter(${val})` : `Counter`;
  });
  return (
    <>
      <div className="App-header">
        Counter
        <div className="App-link">
          <Button name="counterSign" type="-" onClick={() => setVal(val - 1)}>
            -
          </Button>
          <input type="text" className="counterText" value={val} />
          <Button name="counterSign" type="+" onClick={() => setVal(val + 1)}>
            +
          </Button>
        </div>
      </div>
    </>
  );
};

export default Counter;
