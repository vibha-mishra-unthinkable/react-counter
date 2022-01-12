import React from "react";
import "./App.css";

const Button = (props) => {
  const { name, onClick, type } = props;
  console.log(props);
  return (
    <div>
      <button className={name} onClick={onClick}>
        {type}
      </button>
    </div>
  );
};

export default Button;
