import React from "react";
import "./button.css";

const Button = ({
  className = "null",
  onClick = null,
  text,
  type = "button",
  isDisabled = false
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type="type"
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
