import React from "react";
import "./App.css";

const Button = (props) => {
  const { name, onclick } = props;
  return (
    <div>
      <button className={name} onClick={onclick}></button>
    </div>
  );
};

export default Button;
