import React from "react";
import "./App.css";

const Button = (props) => {
  const { className, onClick, title } = props;
  console.log("button", title, "rendered");
  return (
    <>
      <button className={className} onClick={onClick}>
        {title}
      </button>
    </>
  );
};

export default React.memo(Button);
