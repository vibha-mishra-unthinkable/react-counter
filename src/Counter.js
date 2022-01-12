import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";

const Counter = () => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    document.title = val > 0 ? `Counter(${val})` : `Counter`;
  });
  const handleDecrement = React.useCallback(() => {
    setVal((prevState) => prevState - 1);
  }, []);
  const handleIncrement = React.useCallback(() => {
    setVal((prevState) => prevState + 1);
  }, []);
  return (
    <>
      <div className="App-header">
        Counter
        <div className="App-link">
          <Button className="counterSign" title="-" onClick={handleDecrement} />

          <input type="text" className="counterText" value={val} />
          <Button className="counterSign" title="+" onClick={handleIncrement} />
        </div>
      </div>
    </>
  );
};

export default Counter;
