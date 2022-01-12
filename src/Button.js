import React from "react";
import "./App.css";

const Button = (props) => {
  const { className, onClick, title } = props;
  return (
    <div>
      <button className={className} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
